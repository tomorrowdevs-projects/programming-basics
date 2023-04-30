"""
Average
In this exercise you will create a program that computes the average of a collection of values entered by the user.
The user will enter 0 as a sentinel value to indicate that no further values will be provided.
Your program should display an appropriate error message if the first value entered by the user is 0.
Hint: Because the 0 marks the end of the input it should not be included in the average.
"""
average = int
value = int(input('inserisci un valore = '))
if value == 0:
       print('errore uscita primo inserimento non posso inserire 0')
else:
       i=1
       somma=value
       while value != 0:

            value = (int(input('inserisci un valore = ')))
            if value != 0:
                i += 1
            somma += value
            average= (somma/i)
       print("la media vale ", average)



