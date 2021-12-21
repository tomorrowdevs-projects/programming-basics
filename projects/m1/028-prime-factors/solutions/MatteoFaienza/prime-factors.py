user_number = int(input('Enter a integer number (2 or greater): ')) 

factor = 2

if user_number < 2 :
    print('Error, enter a integer number (2 or greater)')
    
else :
    print('The prime factorization of',user_number,'is:')

while user_number >= 2 :

    if user_number % factor == 0 :
        user_number = user_number // factor
        print(factor) 
    
    else :
        factor += 1


