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

## Råd til å få best effekt ut av LLM'er

For å få gode svar fra LLM'er, så må man spørre på riktig måte.
Man må være presis og tydelig, gi nok informasjon til at det kan utføres, og vite hva slags svar man forventer.
Enkelte typer prompts gir bedre svar enn andre, og dette er noe som vil endres over tid, etterhvert som LLM'er blir utviklet.

Konsepter man kan vurdere å ha med i et gitt prompt:

- Klassifisering - hva er problemet vi ønsker å adressere?
- Kontekst - hva er bakgrunnen for problemet?
- Motivasjon - hvorfor er det viktig å løse problemet?
- Konsepter - hvilke konsepter og idéer er viktig for å tilnærme problemet?
- Eksempler - finnes det noen eksempler på hvilken løsning man forventer?
- Konsekvenser - ønsker man å vite tradeoffs ved en gitt løsning?

En LLM som ChatGPT, som er trent på internett, vil nøvendigvis gi bedre svar dersom promptet spør om noe som er veldig vanlig.
For eksempel, så vil det å spørre om veldig vanlige biblioteker i veldig vanlige språk (som for eksempel Java og Spring), gi veldig gode resultater,
siden det finnes veldig mange guider, tutorials, og Stack Overflow-tråder (og lignende) som den er trent på.

Men dess mer obskurt og uvanlig språket eller biblioteket er, dess større er sjangsen for at man ender opp med hallusinasjoner.

En utfordring kan være størrelsen på svaret, da det er begrenset hvor mange tegn man kan få ut fra gratisversjonen av ChatGPT, for eksempel.
Gjerne får man bare så-så mange svar før man må starte en ny samtale, så ChatGPT mister konteksten.
Ofte kan det være greit at hver samtale er atomisk, og bare omhandler en liten bit av puslespillet.
Men en del av puslespillet kan for eksempel være en samtale på et høyere nivå, om hvordan man bryter et
problem ned i mindre biter, og hvordan man kan angripe det.

Forstå problemet du prøver å løse så godt som mulig. Da kan du på en tydelig måte forklare til språkmodellen
hva du prøver å oppnå.

På denne måten kan du bruke flere samtaler til å løse et større problem.
Med andre ord, så bryt ned problemet i mindre problemer.

Det hjelper å gi så mye kontekst som du kan.

Se på samtalen som en iterativ prosess, regn med å stille oppfølgningsspørsmål for å komme frem til et godt svar.

Alltid se over og tenk på svarene du får. Ikke stol blindt på svarene.

Prøv å eksperimenter, gjerne still det samme spørsmålet på flere måter.
Ofte kan en omformulering gi et svar som er betydelig annerledes enn det opprinnelige.
Språkmodeller reagerer ofte godt på å få konkrete eksempler på hvilket type svar du forventer.

Vær obs på å ikke dele sensitiv informasjon.

Husk at AI-verktøy er verktøy, og vil ikke erstatte egen tenkning.
De vil hjelpe deg, men du selv må forstå og løse problemene.
Målet med denne workshop'en er å trene på å bruke disse verktøyene.