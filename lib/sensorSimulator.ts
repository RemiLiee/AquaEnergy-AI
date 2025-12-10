// Dummy sensor data simulator for AquaEnergy AI

export interface SensorData {
  timestamp: number;
  energy: number; // kWh
  flow: number; // L/min
  oxygen: number; // mg/L
  temperature: number; // °C
}

export interface Alert {
  id: string;
  type: 'warning' | 'error' | 'info';
  message: string;
  timestamp: number;
  sensor?: 'energy' | 'flow' | 'oxygen' | 'temperature';
}

class SensorSimulator {
  private baseEnergy = 15.5;
  private baseFlow = 120;
  private baseOxygen = 8.2;
  private baseTemperature = 18.5;

  private generateRandomValue(base: number, variance: number): number {
    return base + (Math.random() - 0.5) * variance;
  }

  generateSensorData(): SensorData {
    return {
      timestamp: Date.now(),
      energy: Math.max(0, this.generateRandomValue(this.baseEnergy, 2.5)),
      flow: Math.max(0, this.generateRandomValue(this.baseFlow, 15)),
      oxygen: Math.max(0, this.generateRandomValue(this.baseOxygen, 0.8)),
      temperature: this.generateRandomValue(this.baseTemperature, 1.5),
    };
  }

  generateHistoricalData(hours: number = 24, intervalMinutes: number = 15): SensorData[] {
    const data: SensorData[] = [];
    const now = Date.now();
    const intervalMs = intervalMinutes * 60 * 1000;
    const points = (hours * 60) / intervalMinutes;

    for (let i = points; i >= 0; i--) {
      const timestamp = now - (i * intervalMs);
      // Add some variation over time
      const timeVariation = Math.sin((i / points) * Math.PI * 2) * 0.3;
      
      data.push({
        timestamp,
        energy: Math.max(0, this.baseEnergy + timeVariation + (Math.random() - 0.5) * 2),
        flow: Math.max(0, this.baseFlow + timeVariation * 10 + (Math.random() - 0.5) * 10),
        oxygen: Math.max(0, this.baseOxygen + timeVariation * 0.2 + (Math.random() - 0.5) * 0.5),
        temperature: this.baseTemperature + timeVariation * 0.5 + (Math.random() - 0.5) * 1,
      });
    }

    return data;
  }

  checkAlerts(data: SensorData): Alert[] {
    const alerts: Alert[] = [];

    // Energy alerts
    if (data.energy > 20) {
      alerts.push({
        id: `energy-${data.timestamp}`,
        type: 'warning',
        message: `Høy energiforbruk: ${data.energy.toFixed(2)} kWh`,
        timestamp: data.timestamp,
        sensor: 'energy',
      });
    } else if (data.energy < 5) {
      alerts.push({
        id: `energy-${data.timestamp}`,
        type: 'info',
        message: `Lavt energiforbruk: ${data.energy.toFixed(2)} kWh`,
        timestamp: data.timestamp,
        sensor: 'energy',
      });
    }

    // Flow alerts
    if (data.flow > 150) {
      alerts.push({
        id: `flow-${data.timestamp}`,
        type: 'warning',
        message: `Høy strømningshastighet: ${data.flow.toFixed(1)} L/min`,
        timestamp: data.timestamp,
        sensor: 'flow',
      });
    } else if (data.flow < 80) {
      alerts.push({
        id: `flow-${data.timestamp}`,
        type: 'error',
        message: `Lav strømningshastighet: ${data.flow.toFixed(1)} L/min`,
        timestamp: data.timestamp,
        sensor: 'flow',
      });
    }

    // Oxygen alerts
    if (data.oxygen < 6) {
      alerts.push({
        id: `oxygen-${data.timestamp}`,
        type: 'error',
        message: `Kritisk oksygennivå: ${data.oxygen.toFixed(2)} mg/L`,
        timestamp: data.timestamp,
        sensor: 'oxygen',
      });
    } else if (data.oxygen < 7) {
      alerts.push({
        id: `oxygen-${data.timestamp}`,
        type: 'warning',
        message: `Lavt oksygennivå: ${data.oxygen.toFixed(2)} mg/L`,
        timestamp: data.timestamp,
        sensor: 'oxygen',
      });
    }

    // Temperature alerts
    if (data.temperature > 22) {
      alerts.push({
        id: `temp-${data.timestamp}`,
        type: 'warning',
        message: `Høy temperatur: ${data.temperature.toFixed(1)}°C`,
        timestamp: data.timestamp,
        sensor: 'temperature',
      });
    } else if (data.temperature < 15) {
      alerts.push({
        id: `temp-${data.timestamp}`,
        type: 'warning',
        message: `Lav temperatur: ${data.temperature.toFixed(1)}°C`,
        timestamp: data.timestamp,
        sensor: 'temperature',
      });
    }

    return alerts;
  }
}

export const sensorSimulator = new SensorSimulator();

