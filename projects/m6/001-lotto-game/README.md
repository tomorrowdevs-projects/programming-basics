# Create a software to generate Italian lotto tickets

Little anecdote of how this project was born
--------------------------------------------
When I 12 years old the Rollerblades (https://en.wikipedia.org/wiki/Inline_skating) started to be a major sport trend in Italy (luckily returned to the trend again in 2020 🎉) .
I wanted a pair of Rollerblades by my parents didn't want to buy me.
So, I decided to create a software to generate some Lotto tickets to play with my weekly allowance, with the hope that the money would allow me to buy my so much desired pair of Rollerblades.
I developed the software, generated 5 tickets and, with one of those tickets, I won about 300.000 italian Lire (about 154.94 euros).
The price of the skates was about 250.000 Lire.

Project Disclaimer
-----------------------
There is not scientific proof for the correlation of generated tickets and the probability of winning. It was a nice story but I was only and simply lucky.

Requirements:
----------------
- software architectures must be an OOP project, to be easily extended in the next learning paths)
- software should ask how many bills the user want to generate (min: 1, max: 5, 0: exit)
- for each bill the software should ask the type of bill (ambata, ambo, terno, quaterna, cinquina) and the amount of numbers to generate (max 10 per bill)
- for each bill the software should ask the "city" (aka "ruota") of the bill: Bari, Cagliari, Firenze, Genova, Milano, Napoli, Palermo, Roma, Torino, Venezia and Tutte (for the project purpose completely ignore "ruota nazionale" and the "estratto determinato" play type).
- numbers will be randomly generated in the range 1-90 (inclusive)
- you have to print the generated tickets with nice ascii art table decoration (https://ozh.github.io/ascii-tables/)

Hints:
----------------
The first task should be the OOP class entity modeling.

Useful links:
-------------------
- https://www.sisal.it/lotto/come-si-gioca
- https://www.servizitelevideo.rai.it/televideo/pub/pagina.jsp?p=786&s=0&r=Nazionale&idmenumain=0