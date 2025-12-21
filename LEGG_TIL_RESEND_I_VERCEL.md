# 📧 Rask Guide: Legg til Resend API Key i Vercel

## 📋 Før du starter:

Du trenger en Resend API-nøkkel. Hvis du ikke har en:

1. Gå til [resend.com](https://resend.com)
2. Opprett en gratis konto (100 e-poster/dag gratis)
3. Logg inn og gå til "API Keys" i dashboardet
4. Klikk "Create API Key"
5. Gi den et navn (f.eks. "AquaEnergy AI Production")
6. **Kopier API-nøkkelen** (du ser den bare én gang!)

---

## ⚡ Legg til i Vercel (3 minutter):

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
┌─────────────────────────┬──────────────────────────────┐
│ Key                     │ Value                        │
├─────────────────────────┼──────────────────────────────┤
│ RESEND_API_KEY          │ re_xxxxxxxxxxxxx             │
│ CONTACT_EMAIL           │ remi_lie98@me.com            │
└─────────────────────────┴──────────────────────────────┘
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

## ✅ Test at det fungerer

1. Gå til: https://aquaenergyai.com
2. Klikk på **"Book gratis pilot"** knappen
3. Sjekk e-posten din på **remi_lie98@me.com**
4. Du skal få en e-post varsel! ✅

Eller fyll ut kontaktskjemaet og sjekk at du får e-post med informasjonen.

---

## 🎉 Ferdig!

E-poster vil nå sendes til `remi_lie98@me.com` når:
- ✅ Noen klikker på "Book gratis pilot" knappen
- ✅ Noen fyller ut og sender kontaktskjemaet

---

## 📝 Viktig om Resend

- **Gratis tier**: 100 e-poster per dag
- **From adresse**: Du må verifisere domeneet ditt (`aquaenergyai.com`) for å sende fra `noreply@aquaenergyai.com`
- **Test**: Du kan teste med din egen e-post først

**For å verifisere domeneet:**
1. Gå til Resend Dashboard → Domains
2. Legg til `aquaenergyai.com`
3. Følg DNS-instruksjonene de gir deg

---

**Trenger hjelp?** Sjekk:
- Resend docs: https://resend.com/docs
- Vercel docs: https://vercel.com/docs/concepts/projects/environment-variables

