# Innføring i bruk av ChatGPT / GitHub Copilot

Denne workshop'en er ment som en innføring i hvordan man kan benytte
LLM'er i utviklingsarbeid, og er ingen endelig eller komplett guide
på alt man kan bruke det til eller problemstillinger rundt det.
Det handler først og fremst bare om å bli kjent med det,
hvilke oppgaver de er gode til å løse, og hvilke ufordringer man kan 
støte på underveis.

## Hva er en LLM?

En Large Language Model (LLM), er en maskinlæringsmodell som er trent 
på et enormt sett med tekstdata (ofte fra internett), og som i korte trekk
prøver å forutsi neste ord i en tekst, gitt en kontekst.

Den mest kjente, og kanskje mest brukte, er OpenAI sin ChatGPT, som er
tilgjengelig gratis på [playground.openai.com](https://playground.openai.com/).
Denne gratisversjonen er basert på GPT-3.5, men det finnes en nyere versjon,
som er basert på GPT-4, som er tilgjengelig for betalende kunder.
ChatGPT er finetunet versjon av GPT, som er egnet for å generere tekst,
gjerne for å svare på spørsmål, men modellen i seg selv kan være multi-modal,
og GPT4 kan håndtere bilder, lyd, og video.

ChatGPT baserer seg på at man kommer med en kontekst via en prompt, 
og genererer en tekst basert på denne konteksten.
Måten man ordlegger denne prompten på kan ha stor betydning for hvilket
resultat den ender opp med å generere.

## Hva er GitHub Copilot?

GitHub Copilot er en LLM som er finetunet for å fungere som en kodeassistent,
ved å foreslå kodesnutter etterhvert som man jobber i et integrert miljø.
Den er også basert på GPT-modellen, men fokuset under treningen og tuningen
har vært å lage en modell som er god til å forstå og generere kode.

Den ser på hele repoet mens man jobber, og prøver å foreslå kode som gir
mening i kontekst av hele prosjektet.

Her er det utfordringer rundt om man har anledning til å dele kodebasen
sin med en ekstern aktør, samt problemstillinger rundt personvern, 
og det vil ikke egne seg i alle prosjekt.