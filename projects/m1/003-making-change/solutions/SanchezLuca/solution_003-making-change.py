cents = int(input('Please enter the amount of cents as integer--> '))
#calcolo il quoziente e poi il resto
tonnies = cents // 200    
ch_tonn = cents % 200    
loonies = ch_tonn // 100   
ch_loon = ch_tonn % 100    
quarters = ch_loon // 25  
ch_quar = ch_loon % 25    
dimes = ch_quar // 10     
ch_dime = ch_quar % 10     
nickels = ch_dime // 5  
ch_nick = ch_dime % 5    
pennies = ch_nick // 1  

print(('tonnies--> ') + str(tonnies))
print(('loonies--> ') + str(loonies))
print(('quarters--> ') + str(quarters))
print(('dimes--> ') + str(dimes))
print(('nickels--> ')  +  str(nickels))
print(('pennies--> ') +  str(pennies))