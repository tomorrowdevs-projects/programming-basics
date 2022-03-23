penny = 0.01
nickel = 0.05
dime = 0.10
quarter = 0.25
loonie = 1.00
toonie = 2.00

# calcolate the rest of the pruchase 
tot_purchase = float(input("Your purchase is " ))
cash = float(input("Insert your cash "))
change = (cash) - (tot_purchase)
counter = 0

# create the cycle to divide the coins based on the change, an apply it on the coins
while toonie <= change:
    change = change - toonie
    counter = counter +1
print("Your purchase is: ")
print(f"{counter} " + "toonie")
counter = 0 
    
while loonie <= change:
    change = change - loonie
    counter = counter +1
print(f"{counter} " + "loonie")
counter = 0 

while quarter <= change: 
    change = change - quarter
    counter = counter +1
print(f"{counter} " + "quarter")
counter = 0 

while dime <= change:
    change = change - dime
    counter = counter +1
print(f"{counter} " + "dime")
counter = 0 

while nickel <= change:
    change = change - nickel
    counter = counter +1
print(f"{counter} " + "nickel")
counter = 0 

while penny <= change:
    change = change - penny 
    counter = counter +1
print(f"{counter} " + "penny")


  
     



