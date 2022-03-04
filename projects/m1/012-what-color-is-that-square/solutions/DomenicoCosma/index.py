
try:
 letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
 row, column = input('Tell me one letter from A to G and one number from 1 to 8').lower()


 if letters.index(row) % 2 == 0:
    if int(column) % 2 == 1:
        print('The square is black')
    else:
        print('The square is white')
 elif letters.index(row) % 2 == 1:
    if int(column) % 2 == 1:
        print('The square is white')
    else:
        print('The square is black')

except:
     print('Error:You should enter one letter from A to G and one number from 1 to 8!!')