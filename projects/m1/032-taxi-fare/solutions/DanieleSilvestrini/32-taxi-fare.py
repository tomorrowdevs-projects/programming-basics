# defines a function that takes km as the only parameter to calculate the price for taxi fares
def taxy_fares(km): 
# transforms kilometers in meters and stores it in a variable called "meters"
    meters = km * 1000
# calculates the price per meter
    meters_costs = (meters / 140) * 0.25
# calculate total price
    total = round((meters_costs + 4.00), 2)
    return total

# declares a main function that use taxy_fares(km)
def main(): 
    print(f'Total amount is {taxy_fares(5)} euros')
    

# sets a conditional statement so the program run main() only if has not been imported in a another file.  
if __name__ == '__main__':
    main()
 