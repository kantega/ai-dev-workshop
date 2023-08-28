# Workshop on GitHub Copilot and ChatGPT

Dette er ment som en praktisk workshop, rettet mot utviklere og bruk av AI-verktøy, som GitHub Copilot og ChatGPT i utviklingsarbeid.

Det bør være fokus på konkrete problemstillinger og arbeidsoppgaver, og for å vise utviklere hvilke muligheter man har.
Det bør fungere som en kickstart, for å komme i gang med å benytte AI-verktøy i utviklingsarbeid.
Det er antakeligvis fordelaktig om det først og fremst omhandler verktøy som er lette å komme i gang med,
og som er gratis - i et forsøk på å senke terskelen til å benytte disse verktøyene.
Her er ChatGPT (GPT3-versjonen) gratis, og man trenger bare logge inn med for eksempel en Google-konto.

Tanken er å løse disse oppgavene med nesten utelukkende bruk av ChatGPT, for å illustrere hvordan LLM'er kan være nyttige i arbeidshverdagen.

Poenget her er ikke å løse de konkrete oppgavene i seg selv, men å opparbeide erfaring rundt aktiv bruk av LLM'er i en arbeidsflyt.

Merk at det er mange av oppgavene som bør ha forbehold (for eksempel dette med å be ChatGPT forklare et bibliotek / rammeverk) om at en
LLM først og fremst en modell som er trent til å generere den mest sannsynlige teksten etter en gitt promt - en LLM vet ikke om den faktisk har rett eller ikke.
For eksempel kan den finne på å generere dokumentasjon eller funksjonalitet som ikke finnes i det opprinnelige biblioteket.
På grunn av disse hallusinasjonene, bør man ikke stole blindt på det en LLM svarer med, og man bør alltid verifisere at det faktisk er korrekt.

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

## Potensielle oppgaver

Dette er ren idémyldring, og bør tilspisses til konkrete oppgaver.

### Utvide en eksisterende kodebase

Her kunne man for eksempel benyttet de eksisterenede TODO-intervju oppgavene, og fått konkrete utvidelser som man skal implementere.

Noen eksempler på konkrete oppgaver:

- Utvide TODO-modellen, med for eksempel et felt for når TODO-en skal være ferdig (due date)
- Opprette en DAO mot en relasjonell database
- Sortering av TODO
- Opprettet tester
- Hente data fra et eksternt API
- Skrive det om i et annet språk (Kotlin, C#, Python, JavaScript, etc)

### Håndtere JSON

- Ta en JSON-modell, generer en Java-klasse basert på denne (DTO, REST-kontroller, DAO) -
  kan utvides til å gå fra 'konsumer JSON via en POST mot et REST-endepunkt, og insert det i en database'
- Ta en liste av JSON'er, som har en property som er en enum (`type: 'IMAGE'`) - omstrukturer denne til et Map som nøkler på enum-verdien:

```javascript
const originalArray = [
    { title: 'dog.jpg', type: 'IMAGE' },
    { title: 'cat.mp4', type: 'VIDEO' },
    { title: 'fish.jpg', type: 'IMAGE' },
    /* etc, etc... */
];

const expectedMap = {
    'IMAGE': [
        { title: 'dog.jpg' },
        { title: 'fish.jpg' }
    ],
    'VIDEO': [
        { title: 'cat.mp4' }
    ]
};
```

### SQL

- Denormaliser en tabellstruktur
- Konstruer en rekke SQL-spørringer som oppretter tabeller og inserter data

### Algoritmer

- Forslag til forskjellige algoritmer for å løse et konkret problem, og trade-offs med de forskjellige algoritmene -
  en konkret oppgave her kan være å traversere en trestruktur, og ta med relevante noder videre
- Optimaliser en funksjon / kodeblokk

### Generere kode

- Hvordan lese en fil
- Hvordan gjøre API-kall
- Hvordan lese / skrive til en database
- Hvordan implementere en algoritme
- Generer en nettside
- Generer en komponent til en web-applikasjon
- Formatter en rekke data
- Oversett fra et språk til et annet
- Parse et gitt filformat, få ut spesifisert informasjon, med en rekke forutsetninger

### Tester

- Generer tester basert på eksisterende kode
- Generer test-data

### Dokumentasjon

- Forklar hva et stykke kode gjør
- Finn et godt navn for en metode
- Bruke LLM'er som en 'live StackOverflow' - be om å forklare klasser og funksjoner i rammeverk / biblioteker
- Finskriving av tekst til issue-trackers (beskrivelsen til en Jira-oppgave, for eksempel)
- Generere dokumentasjon til et API

### Fagstoff

- Forklare terminologi, konsepter, rammeverk, biblioteker, språk; foreslå læringskilder -
  her har man muligheten til å ha en dialog med LLM'en, og spisse inn på begreper man sliter med
- Best practices og design patterns - forslag og forklaringer
- Valg av teknologi til et prosjekt (språk, rammeverk, biblioteker, etc)
- Arkitekturelle beslutninger
- Foreslå et roadmap for å lære en gitt teknologi

### Review

- Be LLM om å gjøre code review av et stykke kode, foreslå forbedringer

### Integrasjoner i IDE'er

- Praktisk bruk av Copilot i IntelliJ / VSCode
- Plugins

### Feilsøking

- Hva er galt med denne koden her?
- Debugging, forklar problemet, få forslag til hva det kan være og hvordan løse det

### Sikkerhet

- Finn potensielle sikkerhetshull i en gitt kodeblokk
