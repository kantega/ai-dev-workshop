---
layout: default
---

# Bash-programmering

## Diverse problemstillinger å løse med script

Bash er et utrolig fleksibelt verktøy, som kan automatisere en hel del arbeid som gjøres på en datamaskin.
Men kan vi automatisere det å skrive et bash-script?

I denne oppgaven tar vi for oss forskjellige noen forskjellige oppgaver som kan automatiseres med Bash,
og forsøker å få språkmodellen til å skrive disse scriptene for oss.

Oppgavene er ikke noen spesiell rekkefølge, og man kan plukke og velge slik man selv vil:

- Vi ønsker å finne alle filer av en gitt type, som ligger spredt over flere mapper og undermapper.
  Vi trenger å ta alle disse filene, samle de i en zip, men samtidig bevare mappe-strukturen,
  og til slutt slette de fra disk.

- Konfigurer maskinen din til å være en mailserver, slik at den kan sende epost.

- Sett opp backup ved hjelp av `rsync` eller `scp`.

- Et script, som tar en liste med hosts, og for hver av hostene logger inn med SSH, 
  og kjører en spesifisert kommando, med tilhørende parametere

- Spinn opp et par VM'er med Terraform, og konfigurer de med Ansible, samt et script for å stoppe de igjen.

- Et script som sover for et gitt antall sekund, før den alarmen går. 
  Kan utvides med å la scriptet ta annen type tid enn sekund, eller dato-tid i et gitt format,
  en snooze-funksjon, eller spille av forskjellige typer lydfiler.

- Et script som viser det lengste og det korteste brukernavnet, mappenavnet, og / eller filnavnet på systemet.

- Et script som automatiserer det å opprette man-pages. Gitt en tekstfil med informasjon som kan bli formattert
  til en man-page, la scriptet lese filen, og outputte den korresponderende man-pagen til stdout.

- Et script som logger all aksessering av filer i en gitt katalog i løpet av en dag. 
  Logg filnavn, brukernavn, og tidspunkt. Om det gjøres endringer, flagg det.

- For alle innloggete brukere, vis navnene, og tidspunktet de sist logget inn.

[< Tilbake](../exercises.md)