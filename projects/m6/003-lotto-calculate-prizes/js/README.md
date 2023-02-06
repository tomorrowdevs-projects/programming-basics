
# **LOTTO GAME**

This program generates up to 5 Lotto tickets.

You will be able to choose how many numbers to play for each card, the wheel or wheels, the type of bet you want to make and the amount you want to play.

The program will generate the coupons with the numbers to play, easily printable from a txt file.

We immediately put the numbers to the test by generating a extraction and calculating the possible winnings of your tickets and the amount won

The rules are the official lotto rules which you can find here https://www.sisal.it/lotto/come-si-gioca

Tables with multipliers for calculating winnings can be found here https://www.lotto-italia.it/lotto/come-dove-giocare/il-gioco/premi-del-lotto

But... let's start!

## How to install

To work the program needs Node JS, if you don't already have it, to install it go to the link https://nodejs.org/en/download/current/.

Node JS is cross-platform and can be installed on MS Windows, Linux and MacOS

Once installed, download the program from Github by clicking on the green button "Clone" and on "Download ZIP".

Unpack it in the directory of your choice, open the terminal and go to the same folder

At this point we install the necessary dependencies and we're done: write "npm install" to the terminal.

At the end the program is ready to run by typing "node index", have fun!

## Index
1. [How many ticket](#nTicket)
2. [How many numbers](#nNumbers)
3. [Wheels](#wheels)
4. [Type of bet](#type)
5. [price amount played](#prices)
6. [More Tickets](#more)
7. [Fake Extraction](#fake)
8. [Print tickets](#print)
9. [Total Win!](#money)
10. [Play again](#repeat)
---

Choose how many ticket to play from 1 to 5 <a name="nTicket"></a>

```
                     Lotto Game!

How many tickets do you want to generate? ( from 1 to 5 )

> 
```
Now choose how many numbers you want to play on the first ticket <a name="nNumbers"></a>
```

                      TICKET #1

How many numbers do you want to play? ( form 1 to 10 )

> 
```
Select the desired wheels: <a name="wheels"></a>
* if you select 'Tutte' you will go directly to choosing the type of bet.
* if you select another wheel you will no longer have the option to select 'Tutte'
```
Which wheel do you want to play?

1) Bari
2) Cagliari
3) Firenze
4) Genova
5) Milano
6) Napoli
7) Palermo
8) Roma
9) Torino
10) Venezia
11) Tutte
 
n) Next
```
You can choose the wheels you want, they will be displayed above, those already chosen will automatically be removed from the list.

 When you're ready press 'n' to continue
```
===========================
Firenze <> Napoli <> Milano
===========================

Which wheel do you want to play?

1) Bari
2) Cagliari
3) Genova
4) Palermo
5) Roma
6) Torino
7) Venezia
 
n) Next
```
Choose the type of bet: <a name="type"></a>
* you can choose as many as you like,
* if you have played less than 5 numbers, the higher bets will not be displayed in the menu. Example: if you play 3 numbers you will not see 'Quaterna' and 'Cinquina'


```
What type of bet do you want to place?

1) Estratto
2) Ambo
3) Terno
4) Quaterna
5) Cinquina
 
n) Next
```
As in the previous menu, those selected will no longer be available for selection
```
=================
Terno <> Cinquina
=================

What type of bet do you want to place?

1) Estratto
2) Ambo
3) Quaterna
 
n) Next
```
Enter the amount you want to play for each type of win you have chosen <a name="prices"></a>
```
=================================================
Estratto <> Ambo <> Terno <> Quaterna <> Cinquina
=================================================

Indicates the amount for each type of bet

Estratto € 5
Ambo € 5
Terno € 2
Quaterna € 2
Cinquina € 1
```
When you're ready will be generated the second ticket if you have chosen more than 1. <a name="more"></a>

At the top you will be shown the summary of the first ticket.


Repeat the process for all the tickets you want to generate 
```
Ticket #1 : 5 numbers played on the Firenze,Napoli,Milano wheel with Terno,Cinquina


                      TICKET #2

How many numbers do you want to play? ( form 1 to 10 )

> 
```
Once creates all tickets, a simulated extraction of all wheels will also be generated. <a name="fake"></a>
```
 FAKE EXTRACTIONS n° 1 del 6 feb 2023                   
+==========+==========================+
|   Bari   |  10 - 25 - 73 - 30 - 40  |
+==========+==========================+
| Cagliari |  22 - 36 - 15 - 40 - 39  |
+==========+==========================+
| Firenze  |  62 - 63 - 55 - 40 - 20  |
+==========+==========================+
|  Genova  |  10 - 17 - 86 - 61 - 82  |
+==========+==========================+
|  Milano  |  34 - 65 - 31 - 48 - 32  |
+==========+==========================+
|  Napoli  |  1 - 64 - 47 - 19 - 85   |
+==========+==========================+
| Palermo  |  17 - 48 - 57 - 60 - 80  |
+==========+==========================+
|   Roma   |  11 - 40 - 67 - 51 - 15  |
+==========+==========================+
|  Torino  |  37 - 12 - 24 - 60 - 54  |
+==========+==========================+
| Venezia  |  41 - 87 - 73 - 2 - 88   |
+==========+==========================+
```
The tickets they will all be printed on the monitor, the ticket.txt file will also be created to facilitate printing, an example below <a name="print"></a>
```
+=================================================+
|         LOTTO GAME TICKET #101 **€ 30**         |
|                                                 |
|                      Tutte                      |
|                                                 |
|         Quaterna  Terno  Ambo  Estratto         |
|                                                 |
|            €9      €8     €7      €6            |
|                                                 |
| 74 - 60 - 70 - 42 - 34 - 85 - 89 - 23 - 79 - 29 |
|                                                 |
|     Winning:(34) 1 Estratto  on Bari € 0.62     |
|                                                 |
+=================================================+

+================================+
| LOTTO GAME TICKET #102 **€ 6** |
|                                |
|    Cagliari  Genova  Napoli    |
|                                |
|        Terno  Estratto         |
|                                |
|         €3       €3            |
|                                |
|          19 - 64 - 45          |
|                                |
|         Winning : NO !         |
|                                |
+================================+
```
Finally the amounts won for each ticket, the totals won and the total invested are shown <a name="money"></a>
```
Total winnings already detaxed by 8%:

Total winnings: € 0.62
Total invested: € 36
```
At the end you can decide whether to start playing again or exit the program, 

press 'y' to start again <a name="repeat"></a>
```
Do you want to play again?

y or n > n
```
Good fun ! 😃