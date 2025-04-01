import Image from "next/image";
import Link from "next/link";

export default function DrainageServiceDetails() {
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
                  src="/assets/icons/drainage-icon-in-circle.jpg"
                  alt="Drainage Services Icon"
                  width={208}
                  height={208}
                  className="w-36 h-36 sm:w-52 sm:h-52 self-center md:self-start"
                  priority
                />

                {/* Sections */}
                <h2 className="text-2xl/7 font-bold text-brand-green pt-4 md:pt-14 pb-3 underline decoration-brand-yellow decoration-4 underline-offset-4">
                  Drain emergencies and unblocking
                </h2>
                <p className="flex-auto pb-2 md:pb-5 text-base md:text-lg">
                  We stand by to sort your emergency drain problems. Our experts
                  can help you clear out roots, fix broken drain pipes and
                  unblock clogged up toilets, kitchen or bathroom sinks, showers
                  or bath outlets.
                </p>

                <h2 className="text-2xl/7 font-bold text-brand-green pt-4 md:pt-7 pb-3 underline decoration-brand-yellow decoration-4 underline-offset-4">
                  Drain inspections
                </h2>
                <p className="flex-auto pb-2 md:pb-5 text-base md:text-lg">
                  It is often difficult to find the root of drain problems. We
                  use CCTV to find and remove difficult blockages up to the
                  property boundary.
                </p>

                <h2 className="text-2xl/7 font-bold text-brand-green pt-4 md:pt-7 pb-3 underline decoration-brand-yellow decoration-4 underline-offset-4">
                  Drain repairs
                </h2>
                <p className="flex-auto pb-2 md:pb-5 text-base md:text-lg">
                  When broken pipes are the cause of problems, our qualified
                  field tecnicians replace and repair.
                </p>

                <h2 className="text-2xl/7 font-bold text-brand-green pt-4 md:pt-7 pb-3 underline decoration-brand-yellow decoration-4 underline-offset-4">
                  Seasonal drain cleaning & preventative maintenance
                </h2>
                <p className="flex-auto pb-2 md:pb-5 text-base md:text-lg">
                  Our experts provide a seasonal service to clean our drains
                  before they can back up and cause bigger damage and
                  discomfort. This is part of our bigger preventative
                  maintenance program to ensure your plumbing and drainage is in
                  tip-top shape.
                </p>

                {/* Book Now Button */}
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
