# Google Analytics Setup Guide for AquaEnergy AI

## Steg 1: Opprett Google Analytics Property

1. Gå til [Google Analytics](https://analytics.google.com/)
2. Logg inn med din Google-konto
3. Klikk på "Start measuring" eller "Create Property"
4. Fyll ut:
   - **Property name**: AquaEnergy AI
   - **Reporting time zone**: (UTC+01:00) Oslo
   - **Currency**: Norwegian Krone (NOK)
5. Klikk "Next"

## Steg 2: Konfigurer Business Information

1. Velg bransje: "Technology" eller "Other"
2. Velg størrelse: "Small" eller "Medium"
3. Velg hvordan du vil bruke Google Analytics:
   - ✅ Measure customer engagement with your site
   - ✅ Measure conversions (purchases, sign-ups, etc.)
4. Klikk "Create"

## Steg 3: Godta vilkår

1. Les og godta Google Analytics vilkårene
2. Klikk "I Accept"

## Steg 4: Velg data streams

1. Velg "Web" som platform
2. Fyll ut:
   - **Website URL**: `https://aquaenergyai.com`
   - **Stream name**: AquaEnergy AI Website
3. Klikk "Create stream"

## Steg 5: Kopier Measurement ID

1. Du vil nå se en side med "Measurement ID"
2. Det ser ut som: `G-XXXXXXXXXX` (f.eks. `G-ABC123XYZ`)
3. **Kopier denne ID-en** - du trenger den i neste steg

## Steg 6: Legg til i Vercel

1. Gå til [Vercel Dashboard](https://vercel.com/dashboard)
2. Velg ditt "AquaEnergy-AI" prosjekt
3. Gå til **Settings** → **Environment Variables**
4. Klikk **Add New**
5. Fyll ut:
   - **Key**: `NEXT_PUBLIC_GA_ID`
   - **Value**: Lim inn din Measurement ID (f.eks. `G-ABC123XYZ`)
   - **Environment**: Velg alle tre:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
6. Klikk **Save**

## Steg 7: Redeploy

1. Gå til **Deployments** i Vercel Dashboard
2. Klikk på de tre prikkene (⋯) på den siste deploymenten
3. Velg **Redeploy**
4. Vent til deployment er ferdig (ca. 2-3 minutter)

## Steg 8: Verifiser at det fungerer

1. Gå til nettsiden din: https://aquaenergyai.com
2. Åpne Developer Tools (F12)
3. Gå til **Network**-fanen
4. Filtrer på "gtag" eller "analytics"
5. Du skal se requests til `google-analytics.com` - dette betyr at det fungerer!

## Alternativ: Test med Google Tag Assistant

1. Installer [Google Tag Assistant](https://tagassistant.google.com/) Chrome extension
2. Gå til nettsiden din
3. Klikk på Tag Assistant-ikonet
4. Du skal se at Google Analytics er aktivert

## Hva blir sporet?

- **Sidevisninger**: Hvor mange besøkere som ser hver side
- **Besøkstid**: Hvor lenge besøkere er på siden
- **Bounce rate**: Hvor mange som forlater siden umiddelbart
- **Traffikkilder**: Hvor besøkere kommer fra (Google, direkte, sosiale medier, etc.)
- **Geografisk plassering**: Hvor besøkere befinner seg
- **Enheter**: Mobil, desktop, tablet
- **Konverteringer**: Hvis du setter opp events (f.eks. kontaktform-innsendinger)

## Viktig: GDPR og Personvern

Siden du har en norsk nettside, må du:

1. Legge til en personvernpolicy (se footer)
2. Legge til en cookie-banner hvis du bruker cookies
3. Gi brukere mulighet til å velge bort tracking

**Merk**: Google Analytics bruker cookies, så du bør vurdere å legge til en cookie-banner.

## Hjelp

Hvis du trenger hjelp:
- [Google Analytics Hjelp](https://support.google.com/analytics)
- [Vercel Environment Variables Docs](https://vercel.com/docs/concepts/projects/environment-variables)

---

**Status**: ✅ Kode er klar - venter på at du legger til `NEXT_PUBLIC_GA_ID` i Vercel

