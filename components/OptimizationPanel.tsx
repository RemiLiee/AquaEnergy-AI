'use client';

import { useEffect, useState } from 'react';
import { OptimizationRecommendation } from '@/lib/optimization';

import MaintenanceAlerts from './MaintenanceAlerts';
import { MaintenanceAlert } from '@/lib/maintenance';

interface OptimizationData {
  analysis: {
    currentConsumption: number;
    optimalConsumption: number;
    potentialSavings: number;
    savingsAmount: number;
  };
  recommendations: OptimizationRecommendation[];
  maintenanceAlerts?: MaintenanceAlert[];
  totalSavings: {
    totalSavings: number;
    totalAmount: number;
  };
}

interface OptimizationPanelProps {
  onImplementAction?: (recommendation: OptimizationRecommendation) => void;
  implementedActions?: string[];
}

export default function OptimizationPanel({ onImplementAction, implementedActions = [] }: OptimizationPanelProps) {
  const [data, setData] = useState<OptimizationData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOptimization = async () => {
      try {
        const response = await fetch('/api/optimization?gateway_id=demo-gateway');
        if (response.ok) {
          const result = await response.json();
          setData(result);
        }
      } catch (error) {
        console.error('Error fetching optimization:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOptimization();
    const interval = setInterval(fetchOptimization, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <p className="text-gray-500">Laster optimaliseringsdata...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <p className="text-gray-500">Ingen data tilgjengelig</p>
      </div>
    );
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Savings Overview */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-lg p-6 border-2 border-green-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Potensielle Besparelser</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">Potensiell reduksjon</div>
            <div className="text-3xl font-bold text-green-600">{data.analysis.potentialSavings.toFixed(1)}%</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">Estimert besparelse</div>
            <div className="text-3xl font-bold text-green-600">{Math.round(data.analysis.savingsAmount).toLocaleString('no-NO')} kr/mnd</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">Total besparelse</div>
            <div className="text-3xl font-bold text-green-600">{Math.round(data.totalSavings.totalAmount).toLocaleString('no-NO')} kr</div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Optimaliseringsanbefalinger</h2>
        {data.recommendations.length === 0 ? (
          <p className="text-gray-500">Ingen anbefalinger for øyeblikket. Systemet kjører optimalt!</p>
        ) : (
          <div className="space-y-4">
            {data.recommendations.slice(0, 3).map((rec) => {
              const isImplemented = implementedActions.includes(rec.id);
              return (
                <div
                  key={rec.id}
                  className={`border-2 rounded-lg p-4 ${getPriorityColor(rec.priority)}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{rec.title}</h3>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white/50">
                      {rec.priority === 'high' ? 'Høy prioritet' : rec.priority === 'medium' ? 'Middels' : 'Lav'}
                    </span>
                  </div>
                  <p className="text-sm mb-3 opacity-90">{rec.description}</p>
                  <div className="bg-white/50 rounded p-3 mb-2">
                    <div className="text-xs font-semibold mb-1">Anbefalt handling:</div>
                    <div className="text-sm">{rec.action}</div>
                  </div>
                  {rec.potentialSavings > 0 && (
                    <div className="text-sm font-semibold mb-2">
                      💰 Potensiell besparelse: {rec.potentialSavings}% | {rec.estimatedImpact}
                    </div>
                  )}
                  {onImplementAction && !isImplemented && (
                    <button
                      onClick={() => onImplementAction(rec)}
                      className="w-full mt-2 bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-sm"
                    >
                      ✅ Marker som implementert
                    </button>
                  )}
                  {isImplemented && (
                    <div className="w-full mt-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold text-center text-sm border border-green-300">
                      ✓ Implementert
                    </div>
                  )}
                </div>
              );
            })}
            {data.recommendations.length > 3 && (
              <div className="text-center text-sm text-gray-600 pt-2">
                + {data.recommendations.length - 3} flere anbefalinger nedenfor
              </div>
            )}
          </div>
        )}
      </div>

      {/* Maintenance Alerts */}
      {data.maintenanceAlerts && data.maintenanceAlerts.length > 0 && (
        <div className="mt-6">
          <MaintenanceAlerts alerts={data.maintenanceAlerts} />
        </div>
      )}
    </div>
  );
}

