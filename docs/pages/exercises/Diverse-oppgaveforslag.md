---
layout: default
---

# Potensielle oppgaver - Utvikling

### Utvide en eksisterende kodebase

Ta en eksisterende kodebase som du har jobbet på (gitt, selvfølgelig, at det ikke bryter noen lisens eller noe lovverk å bruke det i denne sammenhengen),
eventuelt last ned et open source prosjekt som du enten er kjent med eller som er smått nok til at du lett kan forstå det.

Utvid deretter denne kodebasen med noe som mangler, og bruk LLM'en hele veien.
Noen eksempler på konkrete oppgaver:

- Få det til å kjøre, uten å lese README
- Utvide modeller i kodebasen, med ekstra felter
- Hente data fra et eksternt API
- Skrive flere tester
- Skrive det om til et annet språk
- Lage et API som tilgjengeliggjør data

### Håndtere JSON

- Ta en JSON-modell, generer en Java-klasse basert på denne (DTO, REST-kontroller, DAO) -
  kan utvides til å gå fra "konsumer JSON via en POST mot et REST-endepunkt, og insert det i en database"
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


## Potensielle oppgaver - Drift

### Automasjon

Man kan finne konkrete deler av en arbeidsflyt som potensielt kan automatiseres, og forsøke å benytte språkmodellen til å
avdekke hva som potensielt kan automatiseres, og hvordan det rent praktisk kan automatiseres.

For eksempel om man i en fly det gjøres en del manuell konfigurasjon, med flere steg, så kan man prøve å få språkmodellen til å
skrive et script eller utforme en prosedyre slik at man ikke behøver alle de manuelle stegene.

[< Tilbake](../exercises.md)