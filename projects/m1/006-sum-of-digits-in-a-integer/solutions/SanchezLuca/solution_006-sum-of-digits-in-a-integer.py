x = int(input('Please insert a four-digit integer for display the sum of its digits--> '))
#calcolo il quoziente in numeri interi e poi il resto 
x1 = x // 1000
x_1 = x % 1000
x2 = x_1 // 100
x_2 = x_1 % 100
x3 = x_2 // 10
x_3 = x_2 % 10
x4 = x_3 // 1

Tot_x = x1 + x2 + x3 + x4

print ('The sum of the digits is--> ',Tot_x) 