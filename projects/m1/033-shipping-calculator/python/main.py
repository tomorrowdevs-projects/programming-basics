def shipping_charge(item_sold):
    if item_sold == 0:
        return 0
    else:
        return (10.99+(item_sold-1)*2.99)

item_sold = int(input("Insert total number of items sold "))
print("Total shipping charge for this order is {:.2f} $".format(shipping_charge(item_sold)))

