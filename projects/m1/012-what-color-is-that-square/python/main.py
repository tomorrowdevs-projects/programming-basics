input_number = input()

letter = input_number[0]
number = int(input_number[1])

begin_black = ['A', 'C', 'E', 'G', 'I', 'K']
begin_white = ['B', 'D', 'F', 'H', 'J', 'L']

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

