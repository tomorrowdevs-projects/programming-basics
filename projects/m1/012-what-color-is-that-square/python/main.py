input_number = input('Please insert your coordinate: ')

letter = input_number[0]
number = int(input_number[1])

begin_black = ['A', 'C', 'E', 'G', 'I', 'K', 'M', 'O', 'Q', 'S', 'U', 'W', 'Y']
begin_white = ['B', 'D', 'F', 'H', 'J', 'L', 'N', 'P', 'R', 'T', 'V', 'X', 'Z']

if letter in begin_black: 
    print('The colum begin with a black square.')
    if number % 2 == 0: 
        print("Your square is white.")
    else:
        print("Your square is black.")

elif letter in begin_white:
    print('The colum begin with a white square.')
    if number % 2 == 0:
        print("Your square is black.")
    else:
        print("Your square is white.")

