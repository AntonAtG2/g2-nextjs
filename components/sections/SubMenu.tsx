"use client";

import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function SubMenu() {
  useEffect(() => {
    const hasAnimated = sessionStorage.getItem("submenu-animated");
    if (!hasAnimated) {
      gsap.from(".tab-link", {
        x: "100%",
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
      });
      sessionStorage.setItem("submenu-animated", "true");
    }

    const submenu = document.getElementById("submenu");
    if (!submenu) return;

    const submenuOffset = submenu.offsetTop;

    const handleScroll = () => {
      if (window.scrollY > submenuOffset) {
        submenu.classList.add("fixed", "top-0", "w-full", "shadow-md");
      } else {
        submenu.classList.remove("fixed", "top-0", "w-full", "shadow-md");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="submenu"
      className="z-[50] bg-white transition-all duration-300"
    >
      <div className="overflow-hidden">
        <nav
          id="menuTabs"
          className="isolate flex divide-x divide-gray-200 rounded-lg shadow-sm"
          aria-label="Tabs"
        >
          {["Plumbing", "Drainage", "Electrical", "Gas"].map((item) => (
            <Link
              key={item}
              href={`/services/${item.toLowerCase()}`}
              className="tab-link group relative min-w-0 flex-1 overflow-hidden bg-brand-yellow px-4 py-4 text-center text-sm font-medium text-brand-green hover:bg-gray-50 hover:text-gray-700 focus:z-10 uppercase"
            >
              <span>{item}</span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
