export default function WhyChoose() {
  return (
    <div className="overflow-hidden bg-brand-light-green py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none">
          <div className="lg:pt-4 lg:pr-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-green uppercase">
                Why Choose Spotted Owl?
              </h2>
              <div className="mt-10 max-w-xl space-y-8 text-gray-600 lg:max-w-none">
                <dl>
                  <div className="relative flex items-start gap-4">
                    <span className="w-2 h-2 mx-4 mt-4 rounded-full bg-black flex-shrink-0"></span>
                    <div>
                      <dt className="font-bold text-base/5 md:text-xl/7 text-brand-green bg-brand-yellow px-4 md:px-2 py-1 inline-block rounded">
                        All-in-One Essential Service Management
                      </dt>
                      <dd className="block text-base/7">
                        We cover all four essential home services including
                        electric, gas, plumbing, and drainage in one friendly
                        offering.
                      </dd>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-4">
                    <span className="w-2 h-2 mx-4 mt-4 rounded-full bg-black flex-shrink-0"></span>
                    <div>
                      <dt className="font-bold text-base/5 md:text-xl/7 text-brand-green bg-brand-yellow px-4 md:px-2 py-1 inline-block rounded">
                        Workmanship guarantees
                      </dt>
                      <dd className="block text-base/7">
                        Our commitment to excellence is backed by a 12-month
                        guarantee on all our workmanship.
                      </dd>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-4">
                    <span className="w-2 h-2 mx-4 mt-4 rounded-full bg-black flex-shrink-0"></span>
                    <div>
                      <dt className="font-bold text-base/5 md:text-xl/7 text-brand-green bg-brand-yellow px-4 md:px-2 py-1 inline-block rounded">
                        Simple, clear pricing
                      </dt>
                      <dd className="block text-base/7">
                        We publish our rates, provide detailed quotes,
                        comprehensive reports, and clear invoices so you
                        don(U+2019)t get surprises.
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
