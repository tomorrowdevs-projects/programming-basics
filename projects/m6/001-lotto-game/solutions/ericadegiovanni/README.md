# Lotto Game

This software simulates the italian Lotto game.  
More informations about Lotto Game [here](https://www.sisal.it/lotto/come-si-gioca).

## How it works

- Start the program through the command line launching the `main.py` file followed by `-n` and the amount of tickets wanted (MAX 5).  
  Example: `py main.py -n 2`.

### Ticket creation:

For each bill the software ask: 
- The "city" (aka "ruota") of the bill: Bari, Cagliari, Firenze, Genova, Milano, Napoli, Palermo, Roma, Torino, Venezia and Tutte (for the project purpose is ignored "ruota nazionale" and the "estratto determinato" play type).
- The amount of numbers to generate (max 10 per bill). Numbers will be randomly generated in the range 1-90 (inclusive).
- The type of bill (ambata, ambo, terno, quaterna, cinquina): can be made multiple bets.
- The amount of money to put for each bet.

- All the tickets will be printed with an ascii art table decoration.

### Extraction:
- Create and print an extraction table ([Lotto table example](https://www.servizitelevideo.rai.it/televideo/pub/pagina.jsp?p=786&s=0&r=Nazionale&idmenumain=0)).      
- Check if some of the tickets you generated result winners.  


### Calculate prizes: 
- If a particular ticket won calculate and show the prizes, both gross and net. 
- Print which tickets result to have won with the relative calculated prizes.


## Structure

The software architectures is an OOP project.
The class `Lotto` manage the business logic: ask informations to the user, validate them and print the tickets.
