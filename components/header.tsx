"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [open, setOpen] = useState(false);

  // const handleClick = () => {
  //   setOpen(!open);
  //   const el = document.getElementById("trusted");
  //   if (el) el.scrollIntoView({ behavior: "smooth" });
  // };

  const pathname = usePathname();
  const isContactPage = pathname === "/contact-us";

  return (
    <>
      <header
        className={`w-full py-4 ${
          isContactPage ? "bg-brand-green" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
          <div className="flex w-full items-center justify-between">
            {/* Logo */}
            <div className="shrink-0">
              <Link href="/" className="-m-1.5 p-1.5">
                <Image
                  src="/assets/images/logo-top-menu.png"
                  alt="The Spotted Owl Logo"
                  width={160}
                  height={80}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden xl:flex flex-1 justify-center items-end">
              <div className="flex gap-x-12">
                <Link
                  href="/"
                  className="text-xs leading-6 font-semibold text-white uppercase border-b-2 border-yellow-300 hover:border-yellow-400 transition"
                >
                  Home
                </Link>
                <Link
                  href="/#AboutUs"
                  className="text-xs leading-6 font-semibold text-white uppercase border-b-2 border-yellow-300 hover:border-yellow-400 transition"
                >
                  About Us
                </Link>
                <Link
                  href="/services/plumbing"
                  className="text-xs leading-6 font-semibold text-white uppercase border-b-2 border-yellow-300 hover:border-yellow-400 transition"
                >
                  Our Services
                </Link>
                <Link
                  href="/contact-us"
                  className="text-xs leading-6 font-semibold text-white uppercase border-b-2 border-yellow-300 hover:border-yellow-400 transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="hidden xl:block shrink-0">
              <Link
                href="tel:+1234567890"
                aria-label="Call Emergency Contact"
                className="block"
              >
                <Image
                  src="/assets/images/for-emergencies-contact.png"
                  alt="Emergency Contact"
                  width={100}
                  height={48}
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setOpen(!open)}
                className="p-2.5 text-white"
                aria-label="Open main menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Flyout */}
          {open && (
            <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 transition-opacity">
              <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg px-6 py-6">
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    className="-m-1.5 p-1.5"
                    onClick={() => setOpen(false)}
                  >
                    <Image
                      src="/assets/images/mobile-spotted-owl-logo.png"
                      alt="Mobile Logo"
                      width={128}
                      height={64}
                      className="h-16 w-auto"
                      priority
                    />
                  </Link>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2.5 text-gray-700"
                    aria-label="Close menu"
                  >
                    <svg
                      className="h-6 w-6 stroke-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="mt-6 space-y-4">
                  <Link
                    href="/"
                    className="block text-gray-900 text-lg font-semibold"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/#AboutUs"
                    className="block text-gray-900 text-lg font-semibold"
                    onClick={() => setOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/plumbing"
                    className="block text-gray-900 text-lg font-semibold"
                    onClick={() => setOpen(false)}
                  >
                    Our Services
                  </Link>
                  <Link
                    href="/contact-us"
                    className="block text-gray-900 text-lg font-semibold"
                    onClick={() => setOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
