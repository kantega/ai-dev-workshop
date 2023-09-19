---
layout: default
---

# Transformere data

## Gi språkmodellen noe data, og transformer det til et nytt format

Språkmodeller kan være overraskende gode til å oppfatte hva et stykke data egentlig er.

Under er noe anonymisert data fra et ansattregister - prøv å bare gi dette nakent til språkmodellen.
Hva slags respons får du?

```
0000PERNR;0001KOSTL;0001ORGEH;0001PERSG;0001PERSK;0001PLANS;0001STELL;0001WERKS;0002INITS;0002NACHN;0002VORNA;9999BEGDA;9999ENDDA;9999KOSTL_TEKST;9999LEDER_NAVN;9999LEDER_PERNR;9999MG_TEKST;9999MUG_TEKST;9999ORGBE;9999PD_TEKST;9999PLANS_TEKST;9999STELL_TEKST
00024852;0000006310;10031725;1;01;30023805;20005464;3110;olnord;Nordman;Ola;20080922;00000000;Seksjon Land;Onkel Skrue;00015193;Fast ansatte;Hovedlønnstabell;00974739123;ACME AS;Rådgiver;1364 Rådgiver
00024853;0000004200;10031700;1;01;30023870;20005464;3110;kanord;Nordman;Kari;20081101;00000000;Seksjon Luft;Rikerud;00035753;Fast ansatte;Hovedlønnstabell;00974739123;ACME AS;Seniorrådgiver;1364 Seniorrådgiver
00024854;0000008000;10008977;1;01;30023843;20003062;3110;hahans;Hansen;Hans;20021202;00000000;Seksjon Vann;Gråstein Gulbrand;00038671;Fast ansatte;Hovedlønnstabell;00974739123;ACME AS;Direktør;1062 Direktør
```

Bruk språkmodellen til å skrive et script som tar en fil med slik informasjon, og setter det inn i en SQL-database.

Utvid dette med mulighet til å koble til en database, legge til nye ansatte, oppdatere eksisterende, og fjerne manglende, 
basert på en fil som sendes inn.

Kan du få språkmodellen til å generere flere linjer med test-data, basert på det opprinnelige skjemaet?


[< Tilbake](../exercises.md)