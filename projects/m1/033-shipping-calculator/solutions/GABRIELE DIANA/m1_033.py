# Shipping Calculator

# An online retailer provides express shipping for many of its items at a rate of €10.99 for the first item in an order, 
# and €2.99 for each subsequent item in the same order. 

# Write a function that takes the number of items in the order as its only parameter. 

# Return the shipping charge for the order as the function’s result. 

# Include a main program that reads the number of items purchased from the user and displays the shipping charge.

# Documentation

# For this project solution you may use:

# - Functions

# Deadline

# This project requires to be completed in a maximum of **2 hours**


def ship_cost(items):
    Kfirst = 10.99
    Knext = 2.99
    total = Kfirst + (Knext*(items-1))
    return "{:.2f}€".format(total)


def main():
    items = int(input("Please insert the total number of items in your order: "))
    print(ship_cost(items))


if __name__ == '__main__':
    main()
