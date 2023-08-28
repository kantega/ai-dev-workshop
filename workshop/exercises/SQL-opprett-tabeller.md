# SQL

## Opprette tabeller

Begynn med å få LLM'en til å generere noen data.
Deretter utvid dataen, gi den egenskaper, noen som kan ha en-til-mange-forhold.
Deretter be den lage SQL-spørringer som oppretter relasjonelle tabeller for å holde denne daten, og så inserte det.
Deretter kan man be LLM'en om å opprette en DAO-klasse for dette.

Eksempel:

Liste av prompts:

> List out 10 countries, from different continents around the world.
>
> Format the list in a table
>
> Add a column, containing the capital city of each country
>
> Add a column, containing the population of each country
>
> Add a column, listing the main export of each country
>
> Define SQL-queries, for creating tables in a relational database - one table for continents, one table for countries, and one table for exports
>
> Create SQL-queries for inserting the original table of countries into the relational tables
>
> Tables should have auto-sequential ID's
>
> Redefine the insertion queries, but taking the automatic sequence into account
>
> Now write a Java DAO-class, for inserting, updating, and deleting data from this schema
>
> Now use the JPA-library instead of the java.sql-library
>
> Could you use the JOOQ-library instead?
