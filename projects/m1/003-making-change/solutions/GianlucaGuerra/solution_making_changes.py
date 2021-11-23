#how much change to provide after a purchase with cash
#calulate sum of cents from user
#output amount of money of change 
#pennie = p-b*100 = 0,01 
#nickel = p-b*20 = 0,05
#dime = p-b*10 = 0,10
#quarter = p-b*4 = 0,25
#loonie = p-b*1 without cent = 1
#toonie = p-b/1 without cent = 2
b=input('Please insert the amount of bills that you have to pay: ')
p=input('Please insert the amount of cash that you want to use to pay: ')
b=float(b)
p=float(p)
#risultato moltiplicato per 100
#toonies = rest // 200 
print('You will have change back of:', (p-b),'$')
rest = (p-b)*100
toonie = rest // 200
rest = rest - toonie*200
loonie = rest // 100
rest = rest - loonie*100
quarter = rest // 25
rest = rest - quarter*25
dime = rest // 10
rest = rest - dime*10
nickel = rest // 5
rest = rest - nickel*5
pennie = rest 
print('Total of toonie,', toonie, 'of loonie,', loonie, 'of quarter,', quarter, 'of dime,', dime, 'of nickel,', nickel, 'of penny,', pennie )