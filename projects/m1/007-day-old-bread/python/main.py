total_bread = int(input("How many loaves of day old bread do you want? ")) 
bread_regular_cost = 3.49 * total_bread  #here i calculate the normal price of the bread 
old_bread_cost = (3.49 * 0.60) * total_bread #Here I calculate the price of the discounted bread
total_price = (3.49 * 0.60) * total_bread + 0  #here there is the sum of discounted bread + 0 (the number of not discounted bread)
#inizialize hours variable
print(f"The regular price is {bread_regular_cost:.2f}€") #:.2f helps me to display only 2 digits after the comma.
print(f"The discounted price is {old_bread_cost:.2f}€ ")
print(f"The total you pay now is {total_price:.2f}€")