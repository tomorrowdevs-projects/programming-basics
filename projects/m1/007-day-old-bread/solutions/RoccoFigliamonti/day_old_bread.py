"""A bakery sells loaves of bread for €3.49 each. 
Day old bread is discounted by 60 percent. 
Write a program that begins by reading the number of loaves of day old bread being purchased from the user. 
Then your program should display the regular price for the bread, the discount because it is a day old, and the total price. 
Each of these amounts should be displayed on its own line with an appropriate label. 
All of the values should be displayed using two decimal places,
and the decimal points in all of the numbers should be aligned when reasonable values are entered by the user.
"""

BreadNum = int(input("How many loaves of day old bread are purchased?: "))

fullPrice = 3.49 * BreadNum
discount = 0.6
discountedPrice = discount * fullPrice

totalPrice = fullPrice - fullPrice*discount

print('Full price:   ' + f"{fullPrice: .2f} €")
print('Discount:     ' + f'{discountedPrice: .2f} €')
print('Total price:  ' + f'{ totalPrice: .2f} €')
