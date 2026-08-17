import { useEffect } from "react";

export function useSpotlight() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const el = e.target.closest(".spotlight-border");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);
}
