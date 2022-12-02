penny = 0.01 #$
nickel = 0.05 #$
dime = 0.10 #$
quarter = 0.25 #$
loonie = 1 #$
toonie = 2 #$

cash = input('Cash given in $: ')
price = input('Price of the asset in $: ')
rest = float(cash) - float(price) #differenza tra cash e price (resto)

print('Total rest is {} $' .format(rest))

#CALCULATING HOW MUCH OF EACH COIN THE MACHINE WILL GIVE
#The change should be given using as few coins as possible
toonies = rest // 2                                                                             
loonies = (rest - toonies*2) // 1                                                               
quarters = (rest - toonies*2 - loonies*1) // 0.25                                               
dimes = (rest - toonies*2 - loonies*1 - quarters*0.25) // 0.10                                  
nickels = (rest - toonies*2 - loonies*1 - quarters*0.25 - dimes*0.10) // 0.05                   
pennies = (rest - toonies*2 - loonies*1 - quarters*0.25 - dimes*0.10 - nickels*0.05) // 0.01    
print('The rest will be given in:')
print(str(toonies) + ' toonies')
print(str(loonies) + ' loonies')
print(str(quarters) + ' quarters')
print(str(dimes) + ' dimes')
print(str(nickels) + ' nickels')
print(str(pennies) + ' pennies')