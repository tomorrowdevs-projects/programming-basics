  
# 1)Drink containers holding one liter or less have a $0.10 deposit, and drink containers holding more than one liter have a $0.25 deposit.  
# 2)Write a program that reads the number of containers of each size from the user.
# 3)Your program should continue by computing and displaying the refund that will be received for returning those containers.
# Format the output so that it includes a dollar sign and two digits to the right of the decimal point.

Bottiglie_1 = int(input("Inserire bottiglie 1l o inferiori: "))
Bottiglie_2 = int(input("Inserire bottiglie superiori a 1l: "))

Resto_Cauzione_1 = Bottiglie_2 * 0.10
Resto_Cauzione_2 = Bottiglie_2 * 0.25
Cauzione_Totale =  Resto_Cauzione_1 + Resto_Cauzione_2

print("Reso Cauzione:", (f"{Cauzione_Totale:.2f}") , "$")
