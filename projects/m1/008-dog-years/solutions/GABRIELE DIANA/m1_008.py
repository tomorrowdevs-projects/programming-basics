# It is commonly said that one human year is equivalent to 7 dog years. 
# However this simple conversion fails to recognize that dogs reach adulthood in approximately two years. 
# As a result, some people believe that it is better to count each of the first two human years as 10.5 dog years, and then count each additional human year as 4 dog
# years.
# Write a program that implements the conversion from human years to dog years described in the previous paragraph. 
# Ensure that your program works correctly for conversions of less than two human years and for conversions of two or more human years. 
# Your program should display an appropriate error message if the user enters a negative number.

# anni cane <=2 = 21 umani (10,5 '1cane)
# anni cane > 2 = 4
# check input anni umani !<0

AnniUmani = int(input("Inserisci la tua età: "))

a2 = (AnniUmani - 2)*4
a1 = 10.5

if 0 < AnniUmani <= 2:
   print(str(AnniUmani*a1) + " Anni Canini")
if AnniUmani > 2:
   print(str(a2+21) + " Anni Canini")
if AnniUmani <= 0:
   print(str("Errore: si prega di inserire numero postitivo maggiore di 0"))