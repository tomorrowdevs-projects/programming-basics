#A bakery sells loaves of bread for €3.49 each. 
#Day old bread is discounted by 60 percent. 
#Write a program that begins by reading the number of loaves of day old bread being purchased from the user. 
#Then your program should display the regular price for the bread, the discount because it is a day old, and the total price. 
#Each of these amounts should be displayed on its own line with an appropriate label. 
#All of the values should be displayed using two decimal places, and the decimal points in all of the numbers should be aligned when reasonable values are entered by the user.



#inserisco il numero delle pagnotte

Number_breads=int(input("quantity breads purchased:  "))
Prices_bread_normal= 3.50

#prezzo totale

Prices_bread_total_normal=Prices_bread_normal* Number_breads

#utilizzo la sintassi per far vedere due numeri decimali dopo la virgola

print("Total price normal: ","{:.2f}".format(Prices_bread_total_normal))
Price_bread_discounted= 3.50 * 0.6

Price_bread_total_disconted = Number_breads * Price_bread_discounted
print("Total price discounted 60%: ","{:.2f}".format(Price_bread_total_disconted))