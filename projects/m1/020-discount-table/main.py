"""
A roulette wheel has 38 spaces on it. Of these spaces, 18 are black, 18 are red, and two are green.
The green spaces are numbered 0 and 00. The red spaces are numbered
 1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30 32, 34 and 36.
 The remaining integers between 1 and 36 are used to number the black spaces.
 Many different bets can be placed in roulette.

We will only consider the following subset of them in this exercise:

Single number (1 to 36, 0, or 00)
Red versus Black
Odd versus Even (Note that 0 and 00 do not pay out for even)
1 to 18 versus 19 to 36
Write a program that simulates a spin of a roulette wheel by using a random number generator.
Display the number that was selected and all of the bets that must be payed.
For example, if 13 is selected then your program should display:
The spin resulted in 13...
Visualizza il numero che è stato selezionato e tutte le scommesse che devono essere pagate.
Lo spin ha portato a 13...
Paghi 13
Paga il nero
Paga dispari
Paghi da 1 a 18
"""
def casual(n1,n2):
    import random
    n=random.randint (n1,n2)
    print ('n = ',n)
    return n


red = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
black = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]








def main():
    n = int(casual(1, 38))
    if (n == 37):
        print('paghi 0')
    elif (n==38):
        print('paghi 00')
    else:
         print('paghi {:9d}'.format(n))

    if n in red:
        print('paghi rosso')
    elif n in black:
        print('paghi black')

    if (int (n%2 == 0) & (n<37)):
        print('paghi pari')
    elif (int (n%2 !=0) & (n<37)):
        print('paghi dispari')
#isruzione di avvio del programma

main()

