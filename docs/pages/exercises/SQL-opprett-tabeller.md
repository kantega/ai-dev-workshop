---
layout: default
---

# SQL

## Opprette tabeller

Begynn med å få LLM'en til å generere noe data.
Dette kan for eksempel være land i verden, bilmerker, etc.

Deretter utvid dataen, gi den egenskaper, noen som kan ha en-til-mange-forhold.
(For eksempel vil flere land høre til et kontinent, den type ting).

Deretter be den lage SQL-spørringer som oppretter relasjonelle tabeller for å holde denne daten, og så inserte det.

Deretter kan man be LLM'en om å opprette en DAO-klasse for dette.

Målet her er å se hvordan LLM'en kan generere data dynamisk, og hvordan den kan bruke dette videre til å generere
kode som er basert på denne dataen.

Eksempel på start:
Liste av prompts:

> List out 10 countries, from different continents around the world.
>
> Format the list in a table
>
> Add a column, containing the capital city of each country


[< Tilbake](../exercises.md)