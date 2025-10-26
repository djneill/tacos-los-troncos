function Gallery() {
  const images = [
    { src: '/tacos.jpg', alt: 'Tacos Los Troncos' },
    { src: '/tacos2.jpg', alt: 'Fresh Quesatacos' },
    { src: '/tacos3.jpg', alt: 'Signature Tacos' },
    { src: '/burrito.jpg', alt: 'El Gigante Burrito' }
  ];

  return (
    <section id="gallery" className="py-20 px-4 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">Get a Taste</h2>
          <p className="text-lg text-gray-600">Fresh, authentic, and made with love</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
