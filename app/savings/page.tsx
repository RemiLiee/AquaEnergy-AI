import Link from 'next/link';
import ROIChart from '@/components/ROIChart';

export default function SavingsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Energibesparelser med AquaEnergy AI
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              Reduser energiforbruket med 10-30% gjennom intelligent overvåkning og optimalisering
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-5xl font-bold text-primary-600 mb-2">10-30%</div>
              <div className="text-gray-700 text-lg font-semibold">Gjennomsnittlig energireduksjon</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-5xl font-bold text-primary-600 mb-2">12-24</div>
              <div className="text-gray-700 text-lg font-semibold">Måneder nedbetalingstid</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-5xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-700 text-lg font-semibold">Av kunder ser besparelser</div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Hvordan vi hjelper deg med å spare energi
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="bg-white border-l-4 border-primary-600 p-6 rounded-r-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Kontinuerlig overvåkning</h3>
                <p className="text-gray-700 text-lg">
                  Våre sensorer gir deg sanntidsdata om energiforbruket, slik at du kan identifisere unødvendig bruk og ta umiddelbare tiltak.
                </p>
              </div>

              <div className="bg-white border-l-4 border-primary-600 p-6 rounded-r-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Automatisk optimalisering</h3>
                <p className="text-gray-700 text-lg">
                  AI-drevet system justerer pumpene og utstyret automatisk basert på faktisk behov, ikke kalendere eller faste tidsplaner.
                </p>
              </div>

              <div className="bg-white border-l-4 border-primary-600 p-6 rounded-r-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Tidlig varsling</h3>
                <p className="text-gray-700 text-lg">
                  Få beskjed umiddelbart når det oppdages unormalt energiforbruk eller potensielle problemer, slik at du kan reagere raskt.
                </p>
              </div>

              <div className="bg-white border-l-4 border-primary-600 p-6 rounded-r-lg shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Data-drevet beslutninger</h3>
                <p className="text-gray-700 text-lg">
                  Dashboardet gir deg full oversikt over energibruken, slik at du kan ta informerte beslutninger om driften.
                </p>
              </div>
            </div>

            {/* ROI Chart Section */}
            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Beregn potensielle besparelser
              </h3>
              <ROIChart />
            </div>

            {/* CTA Section */}
            <div className="text-center bg-primary-600 rounded-xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Klar til å starte?</h3>
              <p className="text-xl text-primary-100 mb-8">
                Book en gratis pilot og se hvordan AquaEnergy AI kan redusere energiforbruket ditt
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/#contact"
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-lg shadow-lg"
                >
                  Book gratis pilot
                </Link>
                <Link
                  href="/dashboard"
                  className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white/10 transition-colors text-lg"
                >
                  Se demo-dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
