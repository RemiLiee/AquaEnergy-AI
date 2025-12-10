# Blusense AI

Plug & Play sensorpakker + AI for energibesparelse i industrianlegg. Sanntids overvåking og optimalisering for energibesparelse.

## 🚀 Features

- **Landing Page** - Profesjonell hjemmeside med produktpakker og kontaktformular
- **Live Dashboard** - Sanntids overvåking av energi, vannstrøm, oksygen og temperatur
- **Sensor Simulator** - Dummy data for testing og demo
- **API Endpoint** - `/api/ingest` for IoT-sensor data
- **IoT Dokumentasjon** - Komplett API-dokumentasjon på `/docs/iot`

## 🛠 Tech Stack

- **Framework**: Next.js 14 med App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS med custom blue theme
- **Charts**: Recharts for data visualisering
- **Deployment**: Vercel-ready

## 📦 Produktpakker

### Plug & Play — Startpakke
- Eastron SDM630
- Clamp-on ultrasonisk flow
- Optisk DO
- PT100 temperatur
- LoRaWAN/4G gateway
- **Pris**: 25 000 kr engangs + 2 990 kr/mnd

### Industri Pro -pakke
- Industriell energimåler (MID/Modbus)
- Industrial clamp-on flow
- Optisk DO (industri)
- 2x IP68 PT100
- 2x vibrasjonssensor
- Utendørs gateway
- **Pris**: 55 000–80 000 kr engangs + 7 990 kr/mnd

## 🏃 Getting Started

### Prerequisites

- Node.js 18+ 
- npm eller yarn

### Installation

```bash
npm install
```

### Development

Start utviklingsserveren:

```bash
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000) i nettleseren.

### Build

Bygg for produksjon:

```bash
npm run build
```

### Production

Start produksjonsserver:

```bash
npm start
```

## 📁 Project Structure

```
blusense-ai/
├── app/
│   ├── api/
│   │   └── ingest/        # IoT sensor data endpoint
│   ├── dashboard/         # Live dashboard side
│   ├── docs/
│   │   └── iot/          # IoT API dokumentasjon
│   ├── layout.tsx        # Root layout med Header/Footer
│   ├── page.tsx          # Landing page
│   └── globals.css       # Global styles
├── components/
│   ├── Alerts.tsx        # Varsler komponent
│   ├── ContactForm.tsx   # Kontaktformular
│   ├── Header.tsx        # Navigasjon
│   ├── Footer.tsx        # Footer med GDPR
│   ├── ProductPackageCard.tsx  # Produktpakke kort
│   ├── RechartsGraph.tsx      # Graf komponent (Recharts)
│   └── ROIChart.tsx     # ROI visualisering
├── lib/
│   ├── sim.ts           # Dummy sensor simulator
│   └── sensorSimulator.ts  # Sensor data generator
└── ...config files
```

## 🔌 API

### POST /api/ingest

Send sensordata fra IoT-gateways.

**Request:**
```json
{
  "gateway_id": "gateway-001",
  "timestamp": 1234567890,
  "sensors": [
    {
      "id": "sensor-energy-001",
      "type": "energy",
      "value": 123.45,
      "unit": "kWh"
    }
  ]
}
```

Se full dokumentasjon på `/docs/iot`.

## 🚢 Deployment til Vercel

1. Push koden til GitHub
2. Koble GitHub-repositoriet til Vercel
3. Vercel vil automatisk bygge og deploye

Prosjektet er klart for Vercel deployment uten ekstra konfigurasjon.

## 📧 Kontakt

post@blusense.com

## 📄 Lisens

Privat prosjekt - Alle rettigheter reservert.

