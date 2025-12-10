'use client';

export default function ROIChart() {
  // Simple before/after chart using CSS
  const beforeValue = 100;
  const afterValue = 75; // 25% reduction

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Energibesparelse</h3>
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Før AquaEnergy AI</span>
            <span className="text-sm font-bold text-gray-900">100%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-8">
            <div 
              className="bg-red-500 h-8 rounded-full flex items-center justify-end pr-2"
              style={{ width: '100%' }}
            >
              <span className="text-white text-xs font-semibold">100%</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Etter AquaEnergy AI</span>
            <span className="text-sm font-bold text-green-600">{afterValue}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-8">
            <div 
              className="bg-green-500 h-8 rounded-full flex items-center justify-end pr-2"
              style={{ width: `${afterValue}%` }}
            >
              <span className="text-white text-xs font-semibold">{afterValue}%</span>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-2">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-lg font-bold text-green-600">
              {beforeValue - afterValue}% reduksjon i energiforbruk
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
