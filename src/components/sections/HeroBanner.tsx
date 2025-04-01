"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function HeroBanner() {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Type of Service");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedUrgency, setSelectedUrgency] = useState("Urgency");
  const [urgencyDropdownOpen, setUrgencyDropdownOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleClick = () => {
    setOpen(!open);
    const el = document.getElementById("trusted");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className={`relative z-0 min-h-screen ${isHomePage ? "-mt-20" : ""}`}
    >
      {/* Optimised background image */}
      <Image
        src="/assets/images/spotted-owl-desktop.webp"
        alt="Spotted Owl branded van"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center -z-10"
      />

      <div className="grid grid-cols-12 min-h-screen justify-start pt-[50vh] sm:pt-[50vh] md:pt-[50vh] lg:pt-[40vh] xl:pt-[30vh]">
        <div className="col-span-10 col-start-2 md:col-span-6 md:col-start-4 lg:col-span-5 lg:col-start-7 relative isolate flex flex-col items-start space-y-6">
          <div className="w-full">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight py-2">
              YOUR TRUSTED
              <br />
              HOME PARTNER
            </h1>
            <p className="text-base md:text-lg lg:text-xl xl:text-3xl mt-3 font-light text-white leading-snug">
              … for rapid & efficient emergency response, quality home
              improvements and enduring long-term maintenance.
            </p>
          </div>

          <div id="trusted" className="w-full">
            <div
              className="w-full bg-white rounded-3xl border-brand-yellow px-6 py-4 cursor-pointer"
              onClick={handleClick}
            >
              <div className="flex items-center justify-between h-8">
                <span className="text-md md:text-xl font-bold uppercase text-brand-green">
                  I need help with
                </span>
              </div>
            </div>

            {/* Expanding Form */}
            {open && (
              <div className="w-full bg-white rounded-3xl shadow-lg px-6 py-6 mt-2 transition-all duration-500 max-h-[800px] overflow-y-auto">
                <form className="space-y-4">
                  {/* Type of Service Dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full flex justify-between items-center bg-brand-light-green bg-opacity-50 border rounded-2xl px-4 py-3 font-normal text-base"
                    >
                      <span>{selectedService}</span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 7.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {dropdownOpen && (
                      <ul className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-[200px] overflow-y-auto">
                        {["Gas", "Plumbing", "Electrical", "Drainage"].map(
                          (service) => (
                            <li
                              key={service}
                              onClick={() => {
                                setSelectedService(service);
                                setDropdownOpen(false);
                              }}
                              className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                            >
                              {service}
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </div>

                  {/* Urgency Dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() =>
                        setUrgencyDropdownOpen(!urgencyDropdownOpen)
                      }
                      className="w-full flex justify-between items-center bg-brand-light-green bg-opacity-50 border rounded-2xl px-4 py-3 font-normal text-base"
                    >
                      <span>{selectedUrgency}</span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                          urgencyDropdownOpen ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 7.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {urgencyDropdownOpen && (
                      <ul className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-[200px] overflow-y-auto">
                        {["Emergency", "Maintenance"].map((urgency) => (
                          <li
                            key={urgency}
                            onClick={() => {
                              setSelectedUrgency(urgency);
                              setUrgencyDropdownOpen(false);
                            }}
                            className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                          >
                            {urgency}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Name */}
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-brand-light-green bg-opacity-50 border rounded-2xl px-4 py-3 font-normal text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-none"
                  />

                  {/* Contact */}
                  <input
                    type="text"
                    placeholder="Contact Number"
                    className="w-full bg-brand-light-green bg-opacity-50 border rounded-2xl px-4 py-3 font-normal text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-none"
                  />

                  {/* Email */}
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full bg-brand-light-green bg-opacity-50 border rounded-2xl px-4 py-3 font-normal text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-none"
                  />

                  {/* Area */}
                  <input
                    type="text"
                    placeholder="Area"
                    className="w-full bg-brand-light-green bg-opacity-50 border rounded-2xl px-4 py-3 font-normal text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-none"
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-brand-yellow py-3 px-4 rounded-3xl text-lg font-bold uppercase hover:bg-brand-green transition hover:text-white"
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
