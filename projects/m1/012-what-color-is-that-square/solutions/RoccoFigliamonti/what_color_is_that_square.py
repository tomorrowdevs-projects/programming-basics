"""# What Color Is That Square?

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
"""
#prendere input
#convertire A-B-C.. in numeri 1-2-3
#se posizione 2 dispari o 2 pari--> black
#se posizione 1 disparo e 1 pari-->white

import string
from tkinter import N
position = list(input("Please enter your position: ").upper())

letters= list(string.ascii_uppercase)
numbers = [i for i in range(1,27)]
combin = dict(zip(letters, numbers)) #associo a ogni lettera un numero
#print(combin)

value = combin.get(position[0]) #associo la lettera dell'input al numero
"""print(value)
print(int(position[1]))
print(value%2 == 0)
print(int(position[1])%2 == 0)"""

if (value%2 == 0 and int(position[1])%2 == 0) \
or (value%2 != 0 and int(position[1])%2 != 0): #entrambi pari o entrambi dispari
    print("Your square is black")
else:
    print("your square is white")
