# This program calculates if you have won at roulette
# n = roulette number 

n=str(input('Enter the number 0,00 or 1 to 36 '))
p='Pay'

if n == '0':
    print(p,'0')
elif n == '00' :
    print(p,'00')

elif n != '0' or n != '00' :
    print(p,n) 

if n == '1' or n == '3' or n == '5' or n == '7'or n == '9' or n == '12' or n == '14' or n == '16' or n == '18' or n == '19' or n == '21' or n == '23' or n == '25' or n == '27' or n == '30' or n == '32' or n == '34' or n == '36':
    print(p,'Red')

elif n == '0' or n == '00' :
    print()

else :
    print(p,'Black')

if n == '1' or n == '3' or n == '5' or n == '7'or n == '9' or n == '11' or n == '13' or n == '15' or n == '17' or n == '19' or n == '21' or n == '23' or n == '25' or n == '27' or n == '29' or n == '31' or n == '33' or n == '35':
    print(p,'Odd') 

elif n == '0' or n == '00' :
    print()

else :
    print(p,'Even') 

if n == '1' or n == '2' or n == '3' or n == '4'or n == '5' or n == '6' or n == '7' or n == '8' or n == '9' or n == '10' or n == '11' or n == '12' or n == '13' or n == '14' or n == '15' or n == '16' or n == '17' or n == '18':
    print(p, '1 to 18')

elif n == '0' or n == '00' :
    print()

else :
    print(p,'19 to 36') 