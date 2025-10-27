function About() {
  return (
    <section className="py-20 px-4 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Our Journey
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Born from a passion for culinary excellence and a love for the
                community, Tacos Los Troncos is more than just a food truck.
                We're on a mission to deliver authentic Mexican street food with
                the convenience of finding us around the corner.
              </p>
              <p>
                Our journey started in a small kitchen with a big dream: to
                create delicious, high-quality food that brings people together.
                Today, we're proud to serve our creations on streets, using only
                fresh, locally-sourced ingredients.
              </p>
              <p className="font-semibold text-orange-700">
                Every taco, every burrito, every bite is made with passion and
                authenticity.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/tacos.jpg"
                alt="Tacos Los Troncos food"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-8 rounded-xl shadow-xl hidden md:block">
              <p className="text-4xl font-black mb-1">100%</p>
              <p className="text-sm font-bold">Authentic</p>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-linear-to-r from-orange-500 to-orange-600 rounded-2xl p-10 text-center text-white">
          <h3 className="text-3xl font-black mb-4">Come Say Hi!</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Visit us at{" "}
            <span className="font-bold">
              8744-B Airport Rd, Temple, TX 76502
            </span>
            . Follow us on social media for updates and last-minute changes.
          </p>
          <a
            href="https://share.google/J2Y9ggZeD4F2WhCi3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-orange-700 font-bold px-8 py-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Find Our Location Today!
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
