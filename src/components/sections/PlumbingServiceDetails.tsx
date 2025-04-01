import Image from "next/image";
import Link from "next/link";

export default function PlumbingServiceDetails() {
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
              <div className="flex flex-col h-full text-base/7 text-gray-600 items-center text-center md:items-start md:text-left">
                <Image
                  src="/assets/icons/plumbing-icon-in-circle.jpg"
                  alt="Plumbing Services Icon"
                  width={208}
                  height={208}
                  className="w-36 h-36 sm:w-52 sm:h-52 self-center md:self-start"
                  priority
                />
                <h2 className="text-2xl/7 font-bold text-brand-green pt-4 md:pt-14 pb-3 underline decoration-brand-yellow decoration-4 underline-offset-4">
                  Leak detection
                </h2>
                <p className="flex-auto pb-2 md:pb-5 text-base md:text-lg">
                  Do you suspect a leak or have a damp problem? Call us to find
                  and repair the problem for you.
                </p>

                <h2 className="text-2xl/7 font-bold text-brand-green pt-4 md:pt-7 pb-3 underline decoration-brand-yellow decoration-4 underline-offset-4">
                  Plumbing Emergencies
                </h2>
                <p className="flex-auto pb-2 md:pb-5 text-base md:text-lg">
                  day and night availability to sort out your emergency plumbing
                  problems. Call us any time.
                </p>

                <h2 className="text-2xl/7 font-bold text-brand-green pt-4 md:pt-7 pb-3 underline decoration-brand-yellow decoration-4 underline-offset-4">
                  Plumbing Repairs
                </h2>
                <p className="flex-auto pb-2 md:pb-5 text-base md:text-lg">
                  We have capacity to deal with all your plumbing problems. From
                  simple leaking faucets to burst geysers we cover it all.
                </p>

                <h2 className="text-2xl/7 font-bold text-brand-green pt-4 md:pt-7 pb-3 underline decoration-brand-yellow decoration-4 underline-offset-4">
                  Preventative maintenance
                </h2>
                <p className="flex-auto pb-2 md:pb-5 text-base md:text-lg-lg">
                  Our field engineers provide scheduled seasonal or annual
                  maintenance so that we head off large disasters by keep
                  infrastructure sage and catching problems while they are
                  small.
                </p>

                <h2 className="text-2xl/7 font-bold text-brand-green pt-4 md:pt-7 pb-3 underline decoration-brand-yellow decoration-4 underline-offset-4">
                  Plumbing Installations
                </h2>
                <p className="flex-auto pb-2 md:pb-5 text-base md:text-lg">
                  Whether you need a new tap, geyser, toilet or water filter,
                  our experienced field engineers can address your needs.
                </p>

                <h2 className="text-2xl/7 font-bold text-brand-green pt-4 md:pt-7 pb-3 underline decoration-brand-yellow decoration-4 underline-offset-4">
                  Certification and inspections
                </h2>
                <p className="flex-auto pb-2 md:pb-5 text-base md:text-lg">
                  We do full surveys for new owners or sellers. Our first visit
                  always includes a full survey of your infrastructure, and we
                  issue Certificates of Compliance.
                </p>

                <h2 className="text-2xl/7 font-bold text-brand-green pt-4 md:pt-7 pb-3 underline decoration-brand-yellow decoration-4 underline-offset-4">
                  Appliance installations
                </h2>
                <p className="flex-auto pb-2 md:pb-5 text-base md:text-lg">
                  Our field engineers can help to hook up appliances such as
                  washing machines or dishwashers to ensure it is up and running
                  quickly without leaks or messes.
                </p>

                <button
                  type="button"
                  className="self-center md:self-start mt-4 md:mt-7 rounded-full bg-brand-green min-w-[240px] min-h-[70px] text-base font-semibold text-brand-yellow shadow-md hover:bg-brand-yellow hover:text-brand-green uppercase"
                  aria-label="Book now – go to contact page"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
