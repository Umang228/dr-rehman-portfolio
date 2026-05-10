const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "..", ".env") });

const dns = require("dns");
if (typeof dns.setDefaultResultOrder === "function") {
  dns.setDefaultResultOrder("ipv4first");
}

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { Resend } = require("resend");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const MAIL_TO = process.env.MAIL_TO;
const MAIL_FROM =
  process.env.MAIL_FROM || "Dr. Rahman Website <onboarding@resend.dev>";

const resendClient = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const smtpEnv = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];
const hasSmtpConfig = smtpEnv.every((k) => Boolean(process.env[k]));

const ipv4Lookup = (hostname, options, callback) => {
  if (typeof options === "function") {
    callback = options;
    options = {};
  }
  return dns.lookup(hostname, { ...(options || {}), family: 4 }, callback);
};

const smtpTransporter = hasSmtpConfig
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

if (resendClient) {
  console.log("[mail] using Resend HTTPS API");
} else if (smtpTransporter) {
  console.log("[mail] using SMTP (host=%s)", process.env.SMTP_HOST);
  smtpTransporter.verify((err) => {
    if (err) console.error("[SMTP] verify failed:", err.code, err.message);
    else console.log("[SMTP] transporter ready");
  });
} else {
  console.warn(
    "[mail] disabled — set RESEND_API_KEY (recommended) or SMTP_* + MAIL_TO."
  );
}

if (!MAIL_TO) {
  console.warn("[mail] MAIL_TO is not set; emails will fail until it is.");
}

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    ok: true,
    message: "Backend is running",
    mailProvider: resendClient ? "resend" : smtpTransporter ? "smtp" : "none",
  });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body || {};

  if (!name || !email) {
    return res
      .status(400)
      .json({ ok: false, message: "Name and email are required." });
  }

  if (!MAIL_TO || (!resendClient && !smtpTransporter)) {
    return res.status(500).json({
      ok: false,
      message:
        "Email service is not configured. Set RESEND_API_KEY (recommended) or SMTP_* env vars, plus MAIL_TO.",
    });
  }

  const subject = `New Consultation Request from ${name}`;
  const text = [
    "New contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    "",
    "Message:",
    message || "-",
  ].join("\n");
  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "-"}</p>
    <p><strong>Message:</strong></p>
    <p>${(message || "-").replace(/\n/g, "<br/>")}</p>
  `;

  try {
    if (resendClient) {
      const { data, error } = await resendClient.emails.send({
        from: MAIL_FROM,
        to: MAIL_TO,
        replyTo: email,
        subject,
        text,
        html,
      });
      if (error) {
        console.error("[Resend] send failed:", error);
        return res.status(500).json({
          ok: false,
          message: "Form received, but email could not be sent.",
          error: { code: error.name || "ResendError", message: error.message },
        });
      }
      console.log("[Resend] sent id=%s", data && data.id);
    } else {
      await smtpTransporter.sendMail({
        from: MAIL_FROM,
        to: MAIL_TO,
        replyTo: email,
        subject,
        text,
        html,
      });
      console.log("[SMTP] sent");
    }

    return res
      .status(201)
      .json({ ok: true, message: "Form submitted and email sent successfully." });
  } catch (error) {
    console.error("[mail] send failed:", {
      code: error.code,
      message: error.message,
      response: error.response,
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
