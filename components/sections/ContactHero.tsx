"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactHero() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Type of Service ▾");

  const [urgencyDropdownOpen, setUrgencyDropdownOpen] = useState(false);
  const [selectedUrgency, setSelectedUrgency] = useState("Urgency ▾");

  return (
    <section className="relative w-full bg-brand-light-green flex flex-col items-center justify-start py-12 sm:min-h-screen sm:py-20 overflow-visible">
      <div className="relative isolate w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between pt-6 sm:pt-8 md:pt-12 lg:pt-36 xl:pt-48 pb-12 sm:pb-20">
          <div className="max-w-2xl lg:flex-1 relative text-center lg:text-left w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-green tracking-tight uppercase pt-24 sm:pt-8">
              GET IN TOUCH
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl mt-6 font-normal text-brand-green leading-snug">
              … for rapid & efficient emergency response, quality home
              improvements and enduring long-term maintenance
            </p>
            <p className="text-base sm:text-xl lg:text-2xl mt-6 font-normal text-brand-green leading-snug">
              +27 21 002 5099
            </p>
            <p className="text-base sm:text-xl lg:text-2xl mt-2 font-normal text-brand-green leading-snug">
              info@spotted-owl.com
            </p>

            <p className="text-base sm:text-xl lg:text-2xl mt-2 font-normal text-brand-green leading-snug flex justify-center lg:justify-start">
              <a
                href="https://wa.me/27689051886"
                className="flex items-center gap-4"
                target="_blank"
              >
                <Image
                  src="/assets/icons/whatsapp.svg"
                  alt="WhatsApp"
                  className="w-7 h-7 flex-shrink-0"
                  width={28}
                  height={28}
                />
                <span>068 905 1886</span>
              </a>
            </p>
          </div>

          <div
            id="trusted"
            className="relative w-full max-w-md mt-12 lg:mt-0 lg:max-w-lg mx-auto lg:self-start lg:ml-auto"
          >
            <div className="w-full bg-white rounded-3xl shadow-lg px-6 py-6 mt-2 transition-all duration-500 max-h-[800px] overflow-y-auto">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
