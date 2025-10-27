import { Facebook } from 'lucide-react';

function Hours() {
  const schedule = [
    { day: 'Monday', hours: '5PM - 10PM', short: 'Mon' },
    { day: 'Tuesday', hours: '5PM - 10PM', short: 'Tue' },
    { day: 'Wednesday', hours: '10AM-2PM, 5PM-10PM', short: 'Wed' },
    { day: 'Thursday', hours: '10AM-2PM, 5PM-10PM', short: 'Thu' },
    { day: 'Friday', hours: '10AM-2PM, 5PM-11PM', short: 'Fri' },
    { day: 'Saturday', hours: '10AM-2PM, 5PM-10PM', short: 'Sat' },
    { day: 'Sunday', hours: 'Closed', short: 'Sun', closed: true }
  ];

  return (
    <section id="hours" className="py-20 px-4 md:px-12 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">Our Hours</h2>
          <p className="text-lg text-gray-300">Weekly Schedule (Usually)</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-center">
            <p className="text-2xl font-black text-white">We're Open!</p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center py-4 px-6 rounded-lg ${
                    item.closed
                      ? 'bg-gray-100'
                      : 'bg-orange-50 border-l-4 border-orange-500'
                  }`}
                >
                  <span className={`text-lg font-bold ${item.closed ? 'text-gray-400' : 'text-gray-900'}`}>
                    {item.day}
                  </span>
                  <span className={`text-lg font-semibold text-right ${item.closed ? 'text-red-500' : 'text-orange-700'}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 font-medium mb-4">
                Follow us on social media for daily location updates!
              </p>
              <a
                href="https://www.facebook.com/p/Tacos-Los-Troncos-100057326684412/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hours;
