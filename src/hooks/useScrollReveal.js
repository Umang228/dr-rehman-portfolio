import { useEffect, useRef, useState } from 'react';

/**
 * Reveal an element when it scrolls into view.
 * Returns a [ref, isVisible] tuple. Once visible, stays visible.
 *
 * @param {Object} options
 * @param {number} [options.threshold=0.15] - IntersectionObserver threshold.
 * @param {string} [options.rootMargin='0px 0px -10% 0px']
 * @param {boolean} [options.once=true] - Disconnect after first reveal.
 */
const useScrollReveal = ({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
} = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
};

export default useScrollReveal;
