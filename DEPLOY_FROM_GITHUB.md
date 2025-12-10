# Deploy fra GitHub til Vercel

## Automatisk Deployment Setup

For å få nettsiden live automatisk fra GitHub, følg disse stegene:

### 1. Logg inn på Vercel
- Gå til [vercel.com](https://vercel.com)
- Logg inn med GitHub-kontoen din

### 2. Importer prosjektet
1. Klikk på "Add New..." → "Project"
2. Velg GitHub-repositoryet ditt: `RemiLiee/AquaEnergy-AI`
3. Vercel vil automatisk oppdage at det er et Next.js-prosjekt

### 3. Konfigurer prosjektet
- **Framework Preset:** Next.js (automatisk oppdaget)
- **Root Directory:** `./` (la stå som standard)
- **Build Command:** `npm run build` (automatisk)
- **Output Directory:** `.next` (automatisk)
- **Install Command:** `npm install` (automatisk)

### 4. Environment Variables (hvis nødvendig)
Hvis du har environment variables (f.eks. for Resend API eller Google Analytics):
- Gå til Project Settings → Environment Variables
- Legg til:
  - `RESEND_API_KEY` (hvis du bruker Resend for e-post)
  - `NEXT_PUBLIC_GA_ID` (hvis du bruker Google Analytics)
  - `CONTACT_EMAIL` (e-postadresse for kontaktskjema)

### 5. Deploy
- Klikk "Deploy"
- Vercel vil automatisk:
  - Bygge prosjektet
  - Deploye til produksjon
  - Gi deg en URL (f.eks. `aquaenergy-ai.vercel.app`)

### 6. Koble til ditt domene
Hvis du allerede har lagt til `aquaenergyai.com`:
- Gå til Project Settings → Domains
- Legg til `aquaenergyai.com` hvis den ikke allerede er der
- Følg DNS-instruksjonene

### 7. Automatisk Deployment
Etter første deploy vil Vercel automatisk:
- ✅ Deploye hver gang du pusher til `master` branch
- ✅ Lage preview deployments for pull requests
- ✅ Vise build status i GitHub

## Verifisering

Etter deploy kan du:
1. Sjekke deployment status på Vercel Dashboard
2. Besøke nettsiden på `https://aquaenergyai.com`
3. Se build logs hvis noe går galt

## Troubleshooting

Hvis deployment feiler:
1. Sjekk build logs i Vercel Dashboard
2. Sjekk at alle dependencies er i `package.json`
3. Sjekk at alle environment variables er satt
4. Sjekk at GitHub repository er riktig koblet


