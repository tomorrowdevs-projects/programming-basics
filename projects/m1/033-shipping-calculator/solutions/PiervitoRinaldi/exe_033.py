number_of_items = int(input('How many items contain your order? : '))

def shipping_charge(number_of_items):
    cost = '%.2f' %(((number_of_items - 1) * 2.99) + 10.99)
    print(cost)

print('Your shipping charge is: $ ', end='')
shipping_charge(number_of_items)

