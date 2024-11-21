# What Color Is That Square?

Positions on a chess board are identified by a letter and a number. 
The letter identifies the column, while the number identifies the row, as shown below:


<img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Chess-board-with-letters_nevit_111.svg" />

Write a program that reads a position from the user. 
Use an if statement to determine if the column begins with a black square or a white square. 
Then use modular arithmetic to report the color of the square in that row. 
For example, if the user enters a1 then your program should report that the square is black. 
If the user enters d5 then your program should report that the square is white. 
Your program may assume that a valid position will always be entered. 
It does not need to perform any error checking.


# Documentation

For this project solution you may use:

- Variables, expressions, statements
- Conditionals and recursion
- Iteration
- Strings

# Deadline

This project requires to be completed in a maximum of **4 hours**

# Analisi dei requisiti e pseudocode

1. Legge da tastiera la cella sulla scacchiera 8x8
2. La cella a1 (prima in basso a sx ) è nera quindi:
   

| Tabella delle possibilità                        |
|--------------------------------------------------|
| Nelle righe dispari le colonne dispari sono nere |
| Nelle righe dispari le colonne pari sono bianche |
| Nelle righe pari le colonne pari sono nere       |
| nelle righe pari le colonne dispari sono bianche | 




Sfruttando l'equivalenza tra il valore 0 (pari) di True (in python) e il valore 1 (dispari) di False
con una condizione booleana sul modulo base 2 della posizione della colonna possiamo determinare se è pari 
o dispari e fare lo stesso con la posizione della riga.
Quindi con due if else annidate in una if else possiamo verificare tutte e quattro le combinazioni
come riportate nella tabella delle possibilità.

# The run of code

```
C:\Users\user\AppData\Local\Programs\Python\Python310\python.exe "C:/Users/user/Desktop
/tommorowdevs-github/Repo TD/programming-basics/projects/m1/012-what-color-is-that-
square/solutions/francescoricci/012-what-color-is-that-square.py"

Insert cell of return color: g3

Color's cell g3 is black

Process finished with exit code 0


```









