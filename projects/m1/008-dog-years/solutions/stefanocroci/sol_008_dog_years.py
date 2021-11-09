
human_years = float(input('Insert the number of years of your dog: '))

if human_years < 0:
    print('ERROR - Please insert a positive number!')
elif human_years == 0:
    print("Hey your dog hasn't been born yet!!")
else: 
    is_more_than_two = int(human_years - 2) > 0     # 1 if > 2, 0 if <= 2
    is_less_or_equal = not is_more_than_two  
    is_less_or_equal = int(is_less_or_equal) # 0 if > 2, 1 if <= 2

    conversion = ((10.5 * 2 + (human_years - 2) * 4) * is_more_than_two + 
                 (human_years * 10.5) * is_less_or_equal)

    print('Your dog has ' + str(conversion) + ' years')