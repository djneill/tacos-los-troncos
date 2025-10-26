import { Facebook, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center">
          <div>
            <h3 className="text-xl font-black mb-3">Tacos Los Troncos</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Authentic Mexican food truck serving delicious tacos, burritos, and more!
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3">Connect</h4>
            <p className="text-gray-400 text-sm mb-3">
              Follow us on social media for daily location updates and special offers!
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.facebook.com/p/Tacos-Los-Troncos-100057326684412/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3">Contact</h4>
            <div className="space-y-3 flex flex-col items-center">
              <a
                href="tel:+12544934909"
                className="flex items-center text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span>(254) 493-4909</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=8744-B+Airport+Rd,+Temple,+TX+76502"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                <MapPin size={16} className="mr-2 flex-shrink-0 mt-0.5" />
                <span>8744-B Airport Rd,<br />Temple, TX 76502</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Tacos Los Troncos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
