
from random import choice


red = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
black = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]
odd_even = black + red
green = [0,'00']
numbers = black + red + green
extraction = choice(numbers)

if extraction in green:
 print(f'Pay {extraction}')
elif extraction in black:
 print(f'Pay {extraction}')
 print(f'Pay Black')
else:
 print(f'Pay {extraction}')
 print(f'Pay Red')


#calcolo se il numero estratto è pari o dispari

if extraction in odd_even:
 if extraction % 2 == 0:
  print('Pay Even')
 else:
  print('Pay Odd')


#calcolo se il numero estratto è tra 1 e 18 o 19 e 36

if extraction in odd_even:
 if extraction < 19 and extraction >= 1:
  print('Pay 1 to 18')
 else:
  print('Pay 19 to 36')