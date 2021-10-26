#   1) asking the user to input the cents of the price
#   2) check if it is a valid input, must be: a number, positive, maximum two digits, maximm 0,99$
#   3) calculate che change, with floor division
#   4) output the final change

#pennies, nickels, dimes, quarters, loonies and toonies
#penny=0,01$
#nickel=0,05$
#dime=0,10$
#quarter=0,25$
#loonie=1$
#toonie=2$


# this function works only if i have to calculate a valid change
# it uses floor divisions
def calculation(change):
    if change//25!=0:
        quaters=change//25
        change=change-quaters*25
        print("Number(s) of quater(s) to give back to the customer:", quaters)

    if change//10!=0:
        dimes=change//10
        change=change-dimes*10
        print("Number(s) of dime(s) to give back to the customer:", dimes)

    if change//5!=0:
        nickels=change//5
        change=change-nickels*5
        print("Number(s) of nickel(s) to give back to the customer:", nickels)

    if change>0:
        print("Number(s) of pennie(s) to give back to the customer:", change)



# asking to input the ammount of cents of the payment
price_cent=input("Please input the amount of cents of the transition with no comma or symbol:")

# checking if the input is valid: must be a number, from 1 to 99 
if price_cent.isnumeric(): # i test if the input is a number
    price_cent=int(price_cent)
    if 0<price_cent<=99: # if it is a number, i test if it is between 1 and 99
        change=100-price_cent # this variable holds the value of the change
        calculation(change)
    else:
        print("You have inserted a price equal to zero!")
else:
    print("You have inserted not a number or a negative ones")



# the program is ended

