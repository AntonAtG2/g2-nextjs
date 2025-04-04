import Image from "next/image";
import Link from "next/link";
import type { ServiceGridSection } from "@/types/graphql";

export default function OurServices({
  sectionHeader,
  services,
}: ServiceGridSection) {
  return (
    <section className="bg-white py-14 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {sectionHeader && (
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-green uppercase text-left">
              {sectionHeader}
            </h1>
          </div>
        )}

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="grid gap-x-32 gap-y-32 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col h-full items-center md:items-start text-center md:text-left"
              >
                <Image
                  src={service.icon.node.mediaItemUrl}
                  alt={service.icon.node.altText || "Service Icon"}
                  width={144}
                  height={144}
                  className="w-36 h-36 self-center md:self-start"
                />
                <h2 className="text-2xl font-semibold text-brand-green pt-4 md:pt-7 pb-3 text-left">
                  {service.serviceTitle}
                </h2>
                <p className="pb-2 md:pb-5">{service.serviceDescription}</p>
                <Link
                  href={service.buttonUrl.url}
                  className="inline-block mt-4 md:mt-7 rounded-full bg-brand-green px-6 py-4 min-w-[180px] min-h-[50px] text-sm font-semibold text-brand-yellow shadow-md hover:bg-brand-yellow hover:text-brand-green uppercase"
                  aria-label={`${service.buttonUrl.title} – go to contact page`}
                  target={service.buttonUrl.target || "_self"}
                >
                  {service.buttonLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
