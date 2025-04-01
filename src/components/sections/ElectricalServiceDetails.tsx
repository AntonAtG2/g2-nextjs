import Image from "next/image";
import Link from "next/link";

export default function ElectricalServiceDetails() {
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
                  src="/assets/icons/electrical-icon-in-circle.jpg"
                  alt="Electrical Services Icon"
                  width={208}
                  height={208}
                  className="w-36 h-36 sm:w-52 sm:h-52 self-center md:self-start"
                  priority
                />
                <h2 className="text-2xl/7 font-bold text-brand-green pt-4 md:pt-14 pb-3 underline decoration-brand-yellow decoration-4 underline-offset-4">
                  Electrical emergencies
                </h2>
                <p className="flex-auto pb-2 md:pb-5 text-base md:text-lg">
                  Electrical emergencies are not just disruptive but are often
                  very dangerous. We offer day and night availability to repair
                  emergency problems and limit the risk of further damage to
                  your property.
                </p>

                <h2 className="text-2xl/7 font-bold text-brand-green pt-4 md:pt-7 pb-3 underline decoration-brand-yellow decoration-4 underline-offset-4">
                  Electrical repairs
                </h2>
                <p className="flex-auto pb-2 md:pb-5 text-base md:text-lg">
                  Our qualified electricians identify and analyse the source of
                  the electrical problems before repairing the problem to the
                  appropriate electrical standard.
                </p>

                <h2 className="text-2xl/7 font-bold text-brand-green pt-4 md:pt-7 pb-3 underline decoration-brand-yellow decoration-4 underline-offset-4">
                  Electrical installations
                </h2>
                <p className="flex-auto pb-2 md:pb-5 text-base md:text-lg">
                  We do installations of wiring, circuit breakers, fuses, plugs
                  and lights switches. We also help with elements such as light
                  fittings or heated towel rails.
                </p>

                <h2 className="text-2xl/7 font-bold text-brand-green pt-4 md:pt-7 pb-3 underline decoration-brand-yellow decoration-4 underline-offset-4">
                  Inspections and certificates
                </h2>
                <p className="flex-auto pb-2 md:pb-5 text-base md:text-lg">
                  Our qualified electricians provide CoC for sellers or offer
                  inspections for new owners wanting to ensure the condition and
                  compliance of their electrical infrastructure.
                </p>

                <h2 className="text-2xl/7 font-bold text-brand-green pt-4 md:pt-7 pb-3 underline decoration-brand-yellow decoration-4 underline-offset-4">
                  Load management
                </h2>
                <p className="flex-auto pb-2 md:pb-5 text-base md:text-lg">
                  Our experts can analyse your loads, make recommendations to,
                  and implement load management changes to limit or reduce
                  electricity consumption.
                </p>

                <h2 className="text-2xl/7 font-bold text-brand-green pt-4 md:pt-7 pb-3 underline decoration-brand-yellow decoration-4 underline-offset-4">
                  Appliance installations
                </h2>
                <p className="flex-auto pb-2 md:pb-5 text-base md:text-lg">
                  Our teams are always available to help with the installations
                  and of any home or commercial appliances. We get it up and
                  running quickly and ensure it is safe and compliant.
                </p>

                <h2 className="text-2xl/7 font-bold text-brand-green pt-4 md:pt-7 pb-3 underline decoration-brand-yellow decoration-4 underline-offset-4">
                  Automation and monitoring
                </h2>
                <p className="flex-auto pb-2 md:pb-5 text-base md:text-lg">
                  Our experienced electricians offer smart timer installation
                  and configuration to manage when your loads such as geysers
                  and pool pumps operate to limit the draining of inverter
                  batteries and optimise solar use.
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
