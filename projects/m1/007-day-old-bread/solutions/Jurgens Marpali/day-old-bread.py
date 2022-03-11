#A bakery sells loaves of bread for €3.49 each. 
#Day old bread is discounted by 60 percent. 
#Write a program that begins by reading the number of loaves of day old bread being purchased from the 
#user. 
#Then your program should display the regular price for the bread, the discount because it is a day old, 
#and the total price. 
#Each of these amounts should be displayed on its own line with an appropriate label. 
#All of the values should be displayed using two decimal places, and the decimal points in all of the 
#numbers should be aligned when reasonable values are entered by the user.
hot_bread = 3.49
cold_bread = 3.49 * 0.6
buy = int(input('How much pieces of old bread do you want to buy?:'))
total = int(buy) * 3.49
discount = cold_bread * buy
pay = total - discount
print('Our Fresh bread is ' + "%.2f" %hot_bread + '$, but the bread of the day before gets discounted by 60%.')
print("Total Price without discounts: " + "%.2f" %total + "$")
print("Discount:" + "%.2f" %discount +"$")
print("Your Total Is: " + "%.2f" %pay + "$")
print("Have a nice day! Thank you for passing by our shop!")


    
