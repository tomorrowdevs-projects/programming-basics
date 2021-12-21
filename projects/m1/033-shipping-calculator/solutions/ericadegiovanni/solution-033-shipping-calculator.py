first_item_rate = 10.99
additional_item_rate = 2.99

# Write a function that takes the number of items parameter. 
# Return the shipping charge for the order as the function’s result. 

def shipping_charge(items):
    total_charge = round(first_item_rate + ((items-1) * items), 2)
    return total_charge

# Include a main program that reads the number of items from the user 
# and displays the shipping charge.
def main():
    items = int(input('Insert the number of items purchased: ')) 
    print(f'The shipping charge is {shipping_charge(items)}$')

main()
