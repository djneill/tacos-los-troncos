function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/tacos.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          Authentic Street Eats,<br />
          <span className="text-orange-400">Made Fresh Daily</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-medium">
          Taste the passion in every bite. We use fresh, locally-sourced ingredients to bring you bold and unforgettable flavors.
        </p>
        <button
          onClick={scrollToMenu}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-lg text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
        >
          View The Menu
        </button>
      </div>
    </section>
  );
}

export default Hero;
