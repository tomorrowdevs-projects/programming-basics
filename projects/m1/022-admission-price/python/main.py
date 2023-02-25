# Admission prices
BABY_AGE = 2
CHILD_AGE_MIN = 3
CHILD_AGE_MAX = 12
SENIOR_AGE = 65

# Prices
BABY_PRICE = 0
CHILD_PRICE = 14.00
SENIOR_PRICE = 18.00
ADULT_PRICE = 23.00

# Initialize total cost to zero
total_cost = 0.0

# Read the age of the first guest
age = input("Enter the age of the guest (or leave blank to finish): ")

# Process the ages until a blank line is entered
while age != "":
    # Convert the age to an integer
    age = int(age)
    
    # Determine the admission price for the guest based on their age
    if age <= BABY_AGE:
        price = BABY_PRICE
    elif age >= CHILD_AGE_MIN and age <= CHILD_AGE_MAX:
        price = CHILD_PRICE
    elif age >= SENIOR_AGE:
        price = SENIOR_PRICE
    else:
        price = ADULT_PRICE
    
    # Add the price to the total cost
    total_cost += price
    
    # Read the age of the next guest
    age = input("Enter the age of the guest (or leave blank to finish): ")

# Display the total cost for the group
print("The total cost for the group is $" + format(total_cost, ".2f"))