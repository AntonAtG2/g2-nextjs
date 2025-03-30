import Image from "next/image";
import Link from "next/link";

export default function OurServices() {
  return (
    <section>
      <div className="bg-white py-14 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mt-0 md:mt-2 text-3xl md:text-4xl text-center md:text-left font-extrabold tracking-tight text-pretty lg:text-balance text-brand-green uppercase">
              Our Services
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid gap-x-32 gap-y-32 items-center md:items-start md:grid-cols-2 lg:grid-cols-4 lg:max-w-none">
              <div className="flex flex-col h-full">
                <dd className="flex flex-col h-full text-base/7 text-gray-600 items-center text-center md:items-start md:text-left">
                  <Image
                    src="/assets/icons/plumbing-icon-in-circle.jpg"
                    alt="Plumbing icon"
                    width={144} // w-36 = 9rem = 144px
                    height={144} // h-36 = 9rem = 144px
                    className="w-36 h-36 sm:w-32 sm:h-32 self-center md:self-start"
                    priority
                  />
                  <h2 className="text-2xl/7 font-semibold text-brand-green pt-4 md:pt-7 pb-3">
                    Plumbing
                  </h2>
                  <p className="flex-auto pb-2 md:pb-5">
                    We offer all plumbing services from leak detection and
                    repairs to complete new installations.
                  </p>
                  <Link href="/contact-us">
                    <button
                      type="button"
                      className="self-center md:self-start mt-4 md:mt-7 rounded-full bg-brand-green px-6 py-4 min-w-[180px] min-h-[50px] text-sm font-semibold text-brand-yellow shadow-md hover:bg-brand-yellow hover:text-brand-green uppercase"
                    >
                      Book Now
                    </button>
                  </Link>
                </dd>
              </div>

              <div className="flex flex-col h-full">
                <dd className="flex flex-col h-full text-base/7 text-gray-600 items-center text-center md:items-start md:text-left">
                  <Image
                    src="/assets/icons/electrical-icon-in-circle.jpg"
                    alt="Plumbing icon"
                    width={144} // w-36 = 9rem = 144px
                    height={144} // h-36 = 9rem = 144px
                    className="w-36 h-36 sm:w-32 sm:h-32 self-center md:self-start"
                    priority
                  />
                  <h2 className="text-2xl/7 font-semibold text-brand-green pt-4 md:pt-7 pb-3">
                    Electrical
                  </h2>
                  <p className="flex-auto pb-2 md:pb-5">
                    Our qualified electricians handle fault finding, repairs,
                    improvements and CoCs.
                  </p>
                  <a href="contact-us/">
                    <button
                      type="button"
                      className="self-center md:self-start mt-4 md:mt-7 rounded-full bg-brand-green px-6 py-4 min-w-[180px] min-h-[50px] text-sm font-semibold text-brand-yellow shadow-md hover:bg-brand-yellow hover:text-brand-green uppercase"
                    >
                      Book Now
                    </button>
                  </a>
                </dd>
              </div>

              <div className="flex flex-col h-full">
                <dd className="flex flex-col h-full text-base/7 text-gray-600 items-center text-center md:items-start md:text-left">
                  <Image
                    src="/assets/icons/drainage-icon-in-circle.jpg"
                    alt="Plumbing icon"
                    width={144} // w-36 = 9rem = 144px
                    height={144} // h-36 = 9rem = 144px
                    className="w-36 h-36 sm:w-32 sm:h-32 self-center md:self-start"
                    priority
                  />

                  <h2 className="text-2xl/7 font-semibold text-brand-green pt-4 md:pt-7 pb-3">
                    Drainage
                  </h2>
                  <p className="flex-auto pb-2 md:pb-5">
                    Our qualified field engineers handle CCTV inspections,
                    drain-jetting and chemical cleaning.
                  </p>
                  <a href="contact-us/">
                    <button
                      type="button"
                      className="self-center md:self-start mt-4 md:mt-7 rounded-full bg-brand-green px-6 py-4 min-w-[180px] min-h-[50px] text-sm font-semibold text-brand-yellow shadow-md hover:bg-brand-yellow hover:text-brand-green uppercase"
                    >
                      Book Now
                    </button>
                  </a>
                </dd>
              </div>

              <div className="flex flex-col h-full">
                <dd className="flex flex-col h-full text-base/7 text-gray-600 items-center text-center md:items-start md:text-left">
                  <Image
                    src="/assets/icons/gas-icon-in-circle.jpg"
                    alt="Plumbing icon"
                    width={144} // w-36 = 9rem = 144px
                    height={144} // h-36 = 9rem = 144px
                    className="w-36 h-36 sm:w-32 sm:h-32 self-center md:self-start"
                    priority
                  />
                  <h2 className="text-2xl/7 font-semibold text-brand-green pt-4 md:pt-7 pb-3">
                    Gas
                  </h2>
                  <p className="flex-auto pb-2 md:pb-5">
                    For your fireplace, gas geyser or stove we handle repairs,
                    installations and even leak-detection.
                  </p>
                  <a href="contact-us/">
                    <button
                      type="button"
                      className="self-center md:self-start mt-4 md:mt-7 rounded-full bg-brand-green px-6 py-4 min-w-[180px] min-h-[50px] text-sm font-semibold text-brand-yellow shadow-md hover:bg-brand-yellow hover:text-brand-green uppercase"
                    >
                      Book Now
                    </button>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
