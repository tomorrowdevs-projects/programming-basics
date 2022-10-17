#Sum of the digits in an integer
#This program reads an four-digit integer and displays the sum of the four digits

number_entered = (input("Enter a four-digit integer: "))
if len(number_entered) != 4:
    while len(number_entered) != 4:
        number_entered = (input("Error! Enter an integer that has four digits (example:3141): "))
a = int (number_entered[0]) 
b = int (number_entered[1])
c = int (number_entered[2])
d = int (number_entered[3])
sum = a + b + c + d
print (a,"+",b,"+",c,"+",d,"=", sum)