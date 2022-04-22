
bit_8 = []
parity = input('Choose the parity, even or odd')

if parity == 'odd' or parity == 'even':                 #se l'input è uguale alla richiesta allora si andrà avanti con il loop
 while True:
    bit = input('Enter a bit... (from 0 to 1)')
    if bit == '':
        break
    bit_8.append(bit)
 bit_counter = bit_8.count('1')
 if len(bit_8) == 8:
   if bit_counter % 2 == 0 and parity == 'odd':
     print('You have to add 1 bit')
   elif bit_counter % 2 == 1 and parity == 'even':
     print('You have to add 1 bit')
   else:
       print('You have to add 0 bit')
 else:
     print('Something is wrong with your bits')
else:
    print('You have to choose even or odd')