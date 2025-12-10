# 🚀 Rask Guide: Legg til Google Analytics i Vercel

## 📋 Informasjon du trenger:
- **Key**: `NEXT_PUBLIC_GA_ID`
- **Value**: `G-LD8L95Q6JN`

---

## ⚡ Rask vei (3 minutter):

### 1. Gå til Vercel
Åpne: https://vercel.com/dashboard

### 2. Velg prosjekt
- Klikk på prosjektet ditt (sannsynligvis "AquaEnergy-AI")

### 3. Settings → Environment Variables
- Klikk **"Settings"** (i toppmenyen)
- Klikk **"Environment Variables"** (i venstremenyen)

### 4. Legg til variabel
Klikk **"Add New"** og fyll ut:

```
┌─────────────────────────┬──────────────────┐
│ Key                     │ Value            │
├─────────────────────────┼──────────────────┤
│ NEXT_PUBLIC_GA_ID       │ G-LD8L95Q6JN     │
└─────────────────────────┴──────────────────┘
```

**Viktig**: Huk av for alle miljøer:
- ✅ Production
- ✅ Preview
- ✅ Development

Klikk **"Save"**

### 5. Redeploy
- Gå til **"Deployments"** (i toppmenyen)
- Finn den **siste deploymenten** (øverst)
- Klikk på **tre prikkene (⋯)** til høyre
- Klikk **"Redeploy"**
- Vent 2-3 minutter

---

## ✅ Test

1. Gå til: https://aquaenergyai.com
2. Trykk **F12** → **Network**-fanen
3. Filtrer på **"gtag"**
4. Du skal se requests til Google Analytics ✅

---

## 🎉 Ferdig!

Google Analytics er nå aktivert! Data vil vises i Google Analytics dashboardet innen 24-48 timer.

---

**Trenger hjelp?** Sjekk Vercel docs: https://vercel.com/docs/concepts/projects/environment-variables


