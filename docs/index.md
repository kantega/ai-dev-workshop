---
layout: default
---

# Innføring i bruk av ChatGPT / GitHub Copilot

Denne workshop'en er ment som en innføring i hvordan man kan benytte verktøy basert på
språkmodeller i utviklingsarbeid, og er ingen endelig eller komplett guide
på alt man kan bruke det til eller problemstillinger rundt det.

Verktøy basert på språkmodeller har både fordeler og ulemper. Og som de fleste verktøy, så må man øve for kunne bruke det effektivt.

Det handler først og fremst bare om å bli kjent med det,
hvilke oppgaver de er gode til å løse, og hvilke ufordringer man kan
støte på underveis.

Workshop'en er ment å være verktøy-agnostisk, og i utgangspunktet kan man bruke akkurat det verktøyet basert på språkmodeller man selv ønsker.
Per i dag er det 2 verktøy som utmerker seg: ChatGPT og GitHub Copilot.

Man kan få tilgang til ChatGPT via [chat.openai.com/](https://chat.openai.com/), der man kan logge seg inn med
eksempelvis Google. ChatGPT basert på GPT-3.5 er gratisversjonen, men man må betale for å få tilgang til GPT-4 versjonen av ChatGPT.

GitHub Copilot er et verktøy spesifikt ment for koding, og er basert på en språkmodell som er trent og finetunet for programmering.
Man kan få tak i en 30 dagers gratis prøveversjon via [https://github.com/github-copilot/signup](https://github.com/github-copilot/signup) -
men vær obs på hva du tilgjengeliggjør, da Copilot sender data ut til sine servere.

## Gjennomføring

Dette er i utgangspunktet en ganske åpen workshop, og kan gjennomføres på flere måter

- Dersom du er litt usikker på hvordan du skal begynne, så kan du starte på denne siden: [Hurtigstart](pages/quickstart.md)
- Dersom du ønsker en liste av oppgaver, ta en titt her: [Oppgaver](pages/exercises.md)
- Dersom du ønsker et kode-repo å starte med, ta en titt her: [Utvid en kodebase](pages/codebase.md)
- Dersom du ikke er utvikler eller ønsker noe annet enn utviklingsoppgaver,
  ta en titt her: [For ikke-utviklere](./pages/non-developers.md)

Noen tips for å få best mulig effekt ut av språkmodeller: [Tips](pages/tips.md)

## Litt kort om språkmodeller

En stor språkmodell (large language model, eller LLM) er en maskinlæringsmodell som er trent på et enormt datasett,
gjerne 'hele' internett, og som i korte trekk prøver å forutsi neste ord i en tekst, gitt en kontekst og input.

De store språkmodellene i dag baserer seg ofte på GPT-arkitekturen - der GPT står for Generative Pre-trained Transformer.
Dette betyr egentlig bare at det er en modell som er trent på forhånd, som genererer noe form for output, basert på et eller annet input.

For ChatGPT, så genererer den tekst, og er trent på språkkilder som bøker, internett, osv, og gir et svar som skal matche et gitt prompt.
En GPT-modell trenger ikke være tekstbasert, for eksempel er DALL-E også basert på GPT, men genererer bilder, og ikke tekst.

### GitHub Copilot

GitHub Copilot er en LLM som er finetunet for å fungere som en kodeassistent,
ved å foreslå kodesnutter etterhvert som man jobber i et integrert miljø.
Den er også basert på GPT-modellen, men fokuset under treningen og tuningen
har vært å lage en modell som er god til å forstå og generere kode.

Den ser på hele repoet mens man jobber, og prøver å foreslå kode som gir
mening i kontekst av hele prosjektet.

Her er det utfordringer rundt om man har anledning til å dele kodebasen
sin med en ekstern aktør, samt problemstillinger rundt personvern,
og det vil ikke egne seg i alle prosjekt.

[Litt mer om workshopen](./pages/notes.md)