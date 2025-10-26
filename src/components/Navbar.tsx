import { Phone, MapPin } from 'lucide-react';

function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <img src="/logo.jpg" alt="" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-black text-gray-900">
                Tacos Los Troncos
              </h1>
              <p className="text-xs text-gray-600 font-medium">
                Authentic Street Eats
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 md:gap-4">
            <button
              onClick={() => scrollToSection("menu")}
              className="px-4 py-2 text-sm md:text-base font-semibold text-gray-700 hover:text-orange-600 transition-colors hidden sm:block"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("hours")}
              className="px-4 py-2 text-sm md:text-base font-semibold text-gray-700 hover:text-orange-600 transition-colors hidden sm:block"
            >
              Hours
            </button>
            <a
              href="tel:+12544934909"
              className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 text-sm md:text-base font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              <Phone size={16} />
              <span className="hidden md:inline">Call</span>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=8744-B+Airport+Rd,+Temple,+TX+76502"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 text-sm md:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <MapPin size={16} />
              <span className="hidden md:inline">Find Us</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
