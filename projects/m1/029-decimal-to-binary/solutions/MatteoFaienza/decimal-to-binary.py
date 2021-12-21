user_number = int(input('Enter a integer number: '))

binari_number = ''

while user_number != 0 :

    if user_number % 2 == 0 :
        user_number //= 2
        binari_number += '0'
         

    else :
        user_number //= 2
        binari_number += '1' 

print('The binary number is',binari_number[::-1]) 