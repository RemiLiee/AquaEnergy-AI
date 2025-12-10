import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-11 h-11 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all group-hover:scale-105 overflow-hidden">
                <svg className="w-7 h-7 text-white relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  {/* Industriel gear/tannhjul */}
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor" stroke="none"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  {/* Sensor/radar linjer */}
                  <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M5.64 5.64L8.46 8.46M15.54 15.54L18.36 18.36M5.64 18.36L8.46 15.54M15.54 8.46L18.36 5.64" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 leading-tight group-hover:text-primary-600 transition-colors">AquaEnergy</span>
                <span className="text-xs text-primary-600 font-semibold leading-tight">AI</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Hjem
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-primary-600 transition-colors">
              Dashboard
            </Link>
            <Link href="/savings" className="text-gray-700 hover:text-primary-600 transition-colors">
              Besparelser
            </Link>
            <Link href="/#products" className="text-gray-700 hover:text-primary-600 transition-colors">
              Produkter
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

