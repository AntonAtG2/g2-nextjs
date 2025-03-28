import Image from "next/image";
import Link from "next/link";

export default function GasServiceDetails() {
  return (
    <section>
      <div className="bg-white py-14 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Back to Home Link */}
          <div className="max-w-2xl">
            <p className="mt-0 md:mt-2 text-center md:text-left text-brand-green uppercase">
              <Link href="/">&lt; Back to Home</Link>
            </p>
          </div>

          {/* Content */}
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <div className="flex flex-col h-full">
              <dd className="flex flex-col h-full text-base/7 text-gray-600 items-center text-center md:items-start md:text-left">
                <Image
                  src="/assets/icons/gas-icon-in-circle.jpg"
                  alt="Gas icon"
                  width={208}
                  height={208}
                  className="w-36 h-36 sm:w-52 sm:h-52 self-center md:self-start"
                  priority
                />

                {/* Sections */}
                <h2 className="text-2xl/7 font-bold text-brand-green pt-4 md:pt-14 pb-3 underline decoration-brand-yellow decoration-4 underline-offset-4">
                  Gas emergencies
                </h2>
                <p className="pb-2 md:pb-5 text-base md:text-lg">
                  Gas emergencies can be life threatening. We are available day
                  and night for your gas emergencies.
                </p>

                <h2 className="text-2xl/7 font-bold text-brand-green pt-4 md:pt-7 pb-3 underline decoration-brand-yellow decoration-4 underline-offset-4">
                  Gas installations
                </h2>
                <p className="pb-2 md:pb-5 text-base md:text-lg">
                  Our certified gas installers will scope, install and certify
                  the gas bottles and connections for your stove, fireplace or
                  gas geyser needs.
                </p>

                <h2 className="text-2xl/7 font-bold text-brand-green pt-4 md:pt-7 pb-3 underline decoration-brand-yellow decoration-4 underline-offset-4">
                  Certification
                </h2>
                <p className="pb-2 md:pb-5 text-base md:text-lg">
                  We will inspect and bring your installation in line with
                  regulation before issuing the necessary Certificates of
                  Compliance for insurance or property sales purposes.
                </p>

                <h2 className="text-2xl/7 font-bold text-brand-green pt-4 md:pt-7 pb-3 underline decoration-brand-yellow decoration-4 underline-offset-4">
                  Leak detection
                </h2>
                <p className="pb-2 md:pb-5 text-base md:text-lg">
                  Gas leaks are highly dangerous. We can find and repair your
                  leaks immediately.
                </p>

                {/* Book Now Button */}
                <button
                  type="button"
                  className="self-center md:self-start mt-4 md:mt-7 rounded-full bg-brand-green min-w-[240px] min-h-[70px] text-base font-semibold text-brand-yellow shadow-md hover:bg-brand-yellow hover:text-brand-green uppercase"
                >
                  Book Now
                </button>
              </dd>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
