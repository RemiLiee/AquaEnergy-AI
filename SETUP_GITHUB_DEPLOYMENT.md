# Setup Automatisk Deployment fra GitHub til Vercel

## Steg-for-steg guide

### 1. Gå til Vercel Dashboard
- Åpne: https://vercel.com/dashboard
- Logg inn med GitHub-kontoen din

### 2. Finn prosjektet
- Søk etter "aqua-energy-ai" eller "AquaEnergy-AI"
- Klikk på prosjektet

### 3. Koble til GitHub (hvis ikke allerede gjort)
1. Gå til **Settings** → **Git**
2. Hvis du ser "Connect Git Repository":
   - Klikk "Connect Git Repository"
   - Velg **RemiLiee/AquaEnergy-AI**
   - Velg **master** branch
   - Klikk "Connect"

### 4. Aktiver Automatisk Deployment
1. I **Settings** → **Git**, sjekk at:
   - ✅ "Production Branch" er satt til `master`
   - ✅ "Automatic deployments from Git" er aktivert
   - ✅ "Deploy Hooks" er aktivert

### 5. Verifiser Webhook
1. Gå til GitHub repository: https://github.com/RemiLiee/AquaEnergy-AI
2. Gå til **Settings** → **Webhooks**
3. Sjekk at det finnes en webhook fra Vercel
4. Hvis ikke, vil Vercel automatisk opprette en når du kobler repositoryet

### 6. Test Deployment
1. Gå tilbake til Vercel Dashboard
2. Gå til **Deployments**-fanen
3. Du skal se alle commits fra GitHub
4. Hver gang du pusher til `master`, vil det automatisk deploye

### 7. Sjekk Domain
1. Gå til **Settings** → **Domains**
2. Sjekk at `aquaenergyai.com` er lagt til
3. Hvis ikke, legg den til og følg DNS-instruksjonene

## Troubleshooting

**Hvis det ikke deployer automatisk:**
1. Sjekk at GitHub repository er riktig koblet i Vercel
2. Sjekk at webhook er aktiv i GitHub
3. Prøv å pushe en liten endring til GitHub og se om det trigges
4. Sjekk build logs i Vercel Dashboard

**For å manuelt trigge deploy:**
- Gå til **Deployments** → **Create Deployment** → Velg `master` branch

