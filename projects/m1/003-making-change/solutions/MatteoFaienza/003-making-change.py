# money entered and total to be paid
cashInserted=float(input('Total cash inserted '))

payment=float(input('The total to be paid is '))

# rest in pennies
rest=cashInserted-payment

pennies=int(rest*100)

# calculation of the rest in coins
toonies=int(pennies/200)

loonies=int((pennies-(200*toonies))/100)

quarter=int((pennies-(200*toonies+100*loonies))/25)

dimes=int((pennies-(200*toonies+100*loonies+25*quarter))/10)

nickels=int((pennies-(200*toonies+100*loonies+25*quarter+10*dimes))/5)

penny=int(((pennies-(200*toonies+100*loonies+25*quarter+10*dimes+5*nickels))/1)+1)

# output rest in coins
print('Total rest is',rest,'$')

print ('The rest will be distributed in')

print(toonies,'Toonies')

print(loonies,'Loonies')

print(quarter,'Quarter')

print(dimes,'Dimes')

print(nickels,'Nickels')

print(penny,'Penny')







