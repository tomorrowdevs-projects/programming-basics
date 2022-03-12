years=int(input('Enter a year please:'))
a = float(years / 400)
b = float(a / 100)
c = float(b / 4)

if a % 1 ==0:
    print('This is  a leap year!')
    if b % 1 ==0:
       print('This is  a leap year!')  
       if c % 1 ==0:
        print('This is not a leap year!')
else:
     print('This is not a leap year!')       
