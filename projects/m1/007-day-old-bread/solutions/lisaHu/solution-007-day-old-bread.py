#A bakery sells loaves of bread for €3.49 each. 
#Day old bread is discounted by 60 percent. 
#Write a program that begins by reading the number of loaves of day old bread being purchased from the user. 
#Then your program should display the regular price for the bread, the discount because it is a day old, and the total price. 
#Each of these amounts should be displayed on its own line with an appropriate label. 
#All of the values should be displayed using two decimal places, and the decimal points in all of the numbers should be aligned when reasonable values are entered by the user.


numberLoaves = int(input("Please, enter the number of day old bread to be bought:\n"))

amountLoaf = 3.49 * numberLoaves
amountDiscount = (amountLoaf * 60)/100
amountDue = amountLoaf - amountDiscount

print()
print("Total loaves:")
print("{:.2f}".format(amountLoaf) + '€')

print()
print("- 60% Discount:")
print("{:.2f}".format(amountDiscount) + '€')

print()
print("Total due:")
print("{:.2f}".format(amountDue) + '€')
print()