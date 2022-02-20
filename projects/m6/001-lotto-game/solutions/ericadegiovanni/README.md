# Lotto Game

This first part of the software simulate the creation of lotto tickets.  
More informations about Lotto Game [here](https://www.sisal.it/lotto/come-si-gioca).

## How it works

- Start the program through the command line launching the `main.py` file followed by `-n` and the amount of tickets wanted (MAX 5).  
  Example: `py main.py -n 2`.

- For each bill the software ask the type of bill (ambata, ambo, terno, quaterna, cinquina) and the amount of numbers to generate (max 10 per bill).
- For each bill the software ask the "city" (aka "ruota") of the bill: Bari, Cagliari, Firenze, Genova, Milano, Napoli, Palermo, Roma, Torino, Venezia and Tutte (for the project purpose is ignored "ruota nazionale" and the "estratto determinato" play type).
- Numbers will be randomly generated in the range 1-90 (inclusive).
- At the end all the tickets will be printed with an ascii art table decoration.

## Structure

The software architectures is an OOP project.
The class `Lotto` manage the business logic: ask informations to the user, validate them and print the tickets.
