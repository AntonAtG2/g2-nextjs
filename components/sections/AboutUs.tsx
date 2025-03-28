export default function AboutUs() {
  return (
    <section
      aria-label="About The Spotted Owl"
      className="relative w-full bg-cover bg-center py-24 sm:py-32"
      style={{
        backgroundImage: "url('/assets/images/workmen-in-boots.jpg')",
      }}
    >
      <div id="AboutUs" className="absolute inset-0 bg-brand-green/75"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-y-16 sm:gap-y-20 lg:mx-0 text-white">
          <div className="lg:pt-4 lg:pr-8 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-brand-yellow">
              About Us
            </h2>
            <div className="mt-6 space-y-6 text-base">
              <p>
                The Spotted Owl was started in 2024 with the long-term goal to
                address the lowering of standards in the home-trades sector…
              </p>
              <p>
                The Spotted Owl is setting out to provide the discerning
                homeowner…
              </p>
              <p>
                By investing in IT, innovation, in-house training, and the
                betterment of our people…
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
