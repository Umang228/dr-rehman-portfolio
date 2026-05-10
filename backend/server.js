const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "..", ".env") });

const dns = require("dns");
if (typeof dns.setDefaultResultOrder === "function") {
  dns.setDefaultResultOrder("ipv4first");
}

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const ipv4Lookup = (hostname, options, callback) => {
  if (typeof options === "function") {
    callback = options;
    options = {};
  }
  return dns.lookup(hostname, { ...(options || {}), family: 4 }, callback);
};

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const requiredEmailEnv = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "MAIL_TO",
];

const hasEmailConfig = requiredEmailEnv.every((key) => Boolean(process.env[key]));

const transporter = hasEmailConfig
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      family: 4,
      lookup: ipv4Lookup,
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000,
      tls: { servername: process.env.SMTP_HOST },
      auth: {
        user: process.env.SMTP_USER,
        pass: (process.env.SMTP_PASS || "").replace(/\s+/g, ""),
      },
    })
  : null;

if (transporter) {
  transporter.verify((err) => {
    if (err) {
      console.error("[SMTP] verify failed:", err.code, err.message);
    } else {
      console.log("[SMTP] transporter ready (host=%s user=%s)", process.env.SMTP_HOST, process.env.SMTP_USER);
    }
  });
} else {
  const missing = requiredEmailEnv.filter((k) => !process.env[k]);
  console.warn("[SMTP] disabled — missing env:", missing.join(", "));
}

app.get("/api/health", (_req, res) => {
  res.status(200).json({ ok: true, message: "Backend is running" });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body || {};

  if (!name || !email) {
    return res
      .status(400)
      .json({ ok: false, message: "Name and email are required." });
  }

  if (!transporter) {
    return res.status(500).json({
      ok: false,
      message:
        "Email service is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS and MAIL_TO.",
    });
  }

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM || `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New Consultation Request from ${name}`,
      text: [
        "New contact form submission",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "-"}`,
        "",
        "Message:",
        message || "-",
      ].join("\n"),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || "-").replace(/\n/g, "<br/>")}</p>
      `,
    });

    return res.status(201).json({
      ok: true,
      message: "Form submitted and email sent successfully.",
    });
  } catch (error) {
    console.error("[SMTP] send failed:", {
      code: error.code,
      command: error.command,
      response: error.response,
      message: error.message,
    });
    return res.status(500).json({
      ok: false,
      message: "Form received, but email could not be sent.",
      error: {
        code: error.code,
        message: error.message,
        response: error.response,
      },
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
});
