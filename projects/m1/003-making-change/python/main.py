change = int(input("Enter your money and we'll give you back change in cents: "))
#inizialize variable from 0
toonies = 0
loonies = 0
quarters = 0
dimes = 0
nickels = 0
pennies = 0
 
# Compute the number of toonies needed
toonies = change // 200 #in this step the // round down
change = change % 200 #in this step the change carries with it the rest

#Compute the number of loonies needed
loonies = change // 100
change = change % 100

#Compute the number of quarters needed
quarters = change // 25
change = change % 25

#Compute the number of dimes needed
dimes = change // 10
change = change % 10

#Compute the number of nickels needed
nickels = change // 5
change = change % 5

# Compute the number of pennies needed.
pennies = change

# Display the result
print("Toonies - 200 cents: ", toonies)
print("Loonies - 100 cents: ", loonies)
print("Quarters - 25 cents: ", quarters)
print("Dimes - 15 cents: ", dimes)
print("Nickels - 5 cents: ", nickels)
print("Pennies - 1 cents: ", pennies)