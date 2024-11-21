#request how many old bread they have purchased
number_bread=int(input('How many loaves of day old bread are you purchaising? '))
normal_cost = number_bread*3.49
discount_cost = (normal_cost*60)/100 
final_cost = normal_cost - discount_cost
normal_cost = '{:.2f}'.format(normal_cost)
discount_cost = '{:.2f}'.format(discount_cost)
final_cost = '{:.2f}'.format(final_cost)
#results
print('Normal price: ' + normal_cost + '€')
print('Discount:     ' + discount_cost + '€')
print('Total price:  ' + final_cost + '€')