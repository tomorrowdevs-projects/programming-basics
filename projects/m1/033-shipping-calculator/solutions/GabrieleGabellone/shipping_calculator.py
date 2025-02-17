# Shipping Calculator
def shipping_calculator (number_of_items):
    if number_of_items >= 1: 
        shipping_charge = 10.99  # €10.99 for the first item in an order
        if number_of_items > 1: 
            shipping_charge = shipping_charge + (number_of_items - 1) * 2.99  # €2.99 for each subsequent item in the same order
    else: shipping_charge = 0
    return(shipping_charge)

items_purchased = int(input("Enter the number of items purchased: "))
shipping_cost = shipping_calculator(items_purchased)
print("The shipping charge is €{:.2f}".format(shipping_cost))