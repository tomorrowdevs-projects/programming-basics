"""# Shipping Calculator

An online retailer provides express shipping for many of its items at a rate of €10.99 for the first item in an order, and €2.99 for each subsequent item in the same order. 

Write a function that takes the number of items in the order as its only parameter. 

Return the shipping charge for the order as the function’s result. 

Include a main program that reads the number of items purchased from the user and displays the shipping charge."""

def shipping_charge(num_of_items):
    """This program calcs the shipping charge for a given number of items,
    considering the first item charge of 10.99 and 2.99 for each subsequent item"""
    fee_per_item = 2.99
    if num_of_items==1:
        total_charge = 10.99
    else:
        total_charge = (num_of_items-1)*fee_per_item + 10.99
    return round(total_charge,2)
    

print(f"The total charge is {shipping_charge(5)} $")
