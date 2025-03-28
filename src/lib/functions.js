// src/lib/functions.js

// Animate tab links with GSAP
export async function animateTabLinks() {
  if (typeof window !== "undefined") {
    const gsap = (await import("gsap")).default;

    document.addEventListener("DOMContentLoaded", () => {
      gsap.from(".tab-link", {
        x: "100%",
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
      });
    });
  }
}

// Sticky submenu on scroll
export function enableStickySubmenu() {
  if (typeof window !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
      const submenu = document.getElementById("submenu");
      if (!submenu) return;

      const submenuOffset = submenu.offsetTop;

      window.addEventListener("scroll", () => {
        if (window.scrollY > submenuOffset) {
          submenu.classList.add("fixed", "top-0", "w-full", "shadow-md");
        } else {
          submenu.classList.remove("fixed", "top-0", "w-full", "shadow-md");
        }
      });
    });
  }
}
