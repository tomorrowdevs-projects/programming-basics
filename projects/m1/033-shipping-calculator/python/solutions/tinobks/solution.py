def shipping_calculator(items):
    if items == 1:
        shipping_charge = 10.99
    elif items > 1:
        shipping_charge = 10.99 + (2.99*(items - 1))
    return shipping_charge

items2 = float(input("Enter the number of items purchased: "))
shipping_charge = shipping_calculator(items2)
print(("The shipping charge is €{:.2f}") .format(shipping_charge))

