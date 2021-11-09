# Asking the number of cents from the user
cents_number = int(input("Insert the number of cents: "))

# Calculate the amount of coins
toonie =  cents_number // 2000
loonie = (cents_number % 2000) // 1000
quarter = (cents_number % 1000) // 25
dime = (cents_number % 25) // 10
nickel = ((cents_number % 25) % 10) // 5
penny = (((cents_number % 25) % 10) % 5) // 1 


print(f"You're change is : {toonie} toonies, {loonie} loonies,"
    f"{quarter} quarters, {dime} dimes, {nickel} nickels, {penny} pennies")