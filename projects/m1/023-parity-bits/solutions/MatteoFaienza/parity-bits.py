# this program is used to detect errors in the transmitted data  
while True :

    user_bit = input('Enter 8 bits with the numbers 0 and 1 - ex(00101101) \n')

    if len(user_bit) > 8 :
        print('Enter the correct number of bits ')
        continue

    if user_bit == ' ' :
        break
    
    n_bit_equal_to_1 = user_bit.count ('1') 

    n_bit_equal_to_1 =str(n_bit_equal_to_1)

    if n_bit_equal_to_1 in '1357' :
        print(user_bit + '1')

    else :
        print(user_bit + '0')    
 
print('Thanks for using the program ') 
 