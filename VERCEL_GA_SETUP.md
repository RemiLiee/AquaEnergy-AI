# 📊 Legg til Google Analytics i Vercel

## ✅ Google Analytics ID
**Measurement ID**: `G-LD8L95Q6JN`

---

## 🔧 Steg for å legge til i Vercel:

### 1. Gå til Vercel Dashboard
- Åpne: https://vercel.com/dashboard
- Logg inn hvis nødvendig

### 2. Velg prosjektet
- Klikk på **"AquaEnergy-AI"** (eller ditt prosjektnavn)

### 3. Gå til Environment Variables
- Klikk på **"Settings"** i toppmenyen
- I venstremenyen, klikk på **"Environment Variables"**

### 4. Legg til ny variabel
- Klikk på **"Add New"** knappen

Fyll ut:
```
Key: NEXT_PUBLIC_GA_ID
Value: G-LD8L95Q6JN
Environment: 
  ✅ Production
  ✅ Preview  
  ✅ Development
```

- Klikk **"Save"**

### 5. Redeploy
- Gå til **"Deployments"** i toppmenyen
- Finn den siste deploymenten
- Klikk på **tre prikkene (⋯)** til høyre
- Klikk **"Redeploy"**
- Vent 2-3 minutter

---

## ✅ Test at det fungerer

1. Gå til: https://aquaenergyai.com
2. Trykk **F12** (Developer Tools)
3. Gå til **"Network"**-fanen
4. Filtrer på **"gtag"** eller **"analytics"**
5. Du skal se requests til `google-analytics.com` ✅

---

## 🎉 Ferdig!

Google Analytics er nå aktivert med Measurement ID: **G-LD8L95Q6JN**

Data vil begynne å vises i Google Analytics dashboardet innen 24-48 timer.





