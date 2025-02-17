
# **LOTTO GAME**

This program generates up to 5 lottery tickets.

You will be able to choose the numbers played for each ticket, the wheel or wheels and the type of play you want to make.

The program will generate the numbers to play.

But... let's start!

## Index
1. [How many ticket](#nTicket)
2. [How many numbers](#nNumbers)
3. [Wheels](#wheels)
4. [Type of bet](#type)
5. [More Tickets](#more)
6. [Print tickets](#print)
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
2) Ambetto
3) Ambo
4) Terno
5) Quaterna
6) Cinquina
 
n) Next
```
As in the previous menu, those selected will no longer be available for selection
```
=================
Terno <> Cinquina
=================

What type of bet do you want to place?

1) Estratto
2) Ambetto
3) Ambo
4) Quaterna
 
n) Next
```
When you're ready press 'n' to generate on the second ticket if you have chosen more than 1. <a name="more"></a>

At the top you will be shown the summary of the first ticket.


Repeat the process for all the tickets you want to generate 
```
Ticket #1 : 5 numbers played on the Firenze,Napoli,Milano wheel with Terno,Cinquina


                      TICKET #2

How many numbers do you want to play? ( form 1 to 10 )

> 
```
Once generated, they will all be printed on the monitor, an example below <a name="print"></a>
```
+==========================================================+
|                   LOTTO GAME TICKET #1                   |
+==========================================================+
|                 Firenze  Napoli  Milano                  |
+==========================================================+
|                     Terno  Cinquina                      |
+==========================================================+
|                  35 - 52 - 69 - 73 - 27                  |
+==========================================================+


+==========================================================+
|                   LOTTO GAME TICKET #2                   |
+==========================================================+
|                         Venezia                          |
+==========================================================+
|                         Cinquina                         |
+==========================================================+
|      17 - 6 - 13 - 70 - 42 - 37 - 64 - 35 - 22 - 44      |
+==========================================================+
```