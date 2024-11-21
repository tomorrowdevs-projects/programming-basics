#It is commonly said that one human year is equivalent to 7 dog years. 
#However this simple conversion fails to recognize that dogs reach adulthood in approximately two years. 
#As a result, some people believe that it is better to count each of the first two human years as 10.5 dog years, and then count each additional human year as 4 dog
#years.
#Write a program that implements the conversion from human years to dog years described in the previous paragraph. 
#Ensure that your program works correctly for conversions of less than two human years and for conversions of two or more human years. 
#Your program should display an appropriate error message if the user enters a negative number.




#contatore anni cani
anni_canini=0
#input anni umani
anniumani=int(input("anni umani: "))
# scrivo le 3 casistiche
if anniumani>2:
   anni_canini+=(10.5*2)+(4*(anniumani-2))
   print(anni_canini) 

if anniumani<=2 and anniumani > 0:
   anni_canini+=10.5*anniumani
   print(anni_canini)

if anniumani<=0:
   print("error years")
         
