import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-green">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              className="h-20 w-auto"
              src="/assets/images/logo-top-menu.png"
              alt="The Spotted Owl"
              width={160}
              height={80}
            />
            <p className="text-sm leading-6 text-balance text-brand-green">
              Your trusted home partner
            </p>
            <div className="flex gap-x-6">
              <Link href="#" className="text-brand-yellow hover:text-white">
                <span className="sr-only">Facebook</span>
                <Image
                  src="/assets/icons/facebook.svg"
                  alt="Facebook"
                  className="w-7 h-7 mr-2"
                  width={28}
                  height={28}
                />
              </Link>
              <Link href="#" className="text-brand-yellow hover:text-white">
                <span className="sr-only">X</span>
                <Image
                  src="/assets/icons/x.svg"
                  alt="X (Twitter)"
                  className="w-7 h-7 mr-2"
                  width={28}
                  height={28}
                />
              </Link>
              <Link href="#" className="text-brand-yellow hover:text-white">
                <span className="sr-only">Instagram</span>
                <Image
                  src="/assets/icons/instagram.svg"
                  alt="Instagram"
                  className="w-7 h-7 mr-2"
                  width={28}
                  height={28}
                />
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-[1fr_2fr] md:grid-cols-2 gap-4 md:gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-brand-yellow">
                  Services
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {["Plumbing", "Electrical", "Drainage", "Gas"].map(
                    (service) => (
                      <li key={service}>
                        <a
                          href="#"
                          className="text-sm leading-6 text-gray-400 hover:text-white"
                        >
                          {service}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-brand-yellow">
                  Home
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-400 hover:text-white"
                    >
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-brand-yellow">
                  Contact Us
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="tel:+27210025099"
                      className="text-sm leading-6 text-gray-400 hover:text-white"
                    >
                      +27 21 002 5099
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@spotted-owl.co"
                      className="text-sm leading-6 text-gray-400 hover:text-white"
                    >
                      info@spotted-owl.co
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/27689051886"
                      className="flex items-center text-sm leading-6 text-gray-400 hover:text-white gap-3"
                      target="_blank"
                      rel="noopener noreferrer"
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
                  </li>
                </ul>
              </div>

              <div className="mt-10 md:mt-0">
                <button
                  type="button"
                  className="flex items-center gap-3 rounded-full bg-brand-yellow px-4 py-2.5 text-sm font-semibold hover:bg-white"
                >
                  MEMBER&nbsp;LOGIN
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-brand-green">
                    <div className="absolute w-3 h-3 rounded-full bg-brand-yellow"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-6 text-gray-400">
            &copy; 2025 The Spotted Owl. Terms of Use. Privacy Policy.
          </p>
        </div>
      </div>
    </footer>
  );
}
