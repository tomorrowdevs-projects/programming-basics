# I ask the user to enter a position on the board
chessPosition=input('Enter the position of the board with the capital letter and number ')
# Through nested conditions I get the black or white square
if chessPosition[0] in 'ACEG':
    if int(chessPosition[1]) % 2 != 0:
        print('The chosen square is black')
    else:
        print('The chosen square is white')
elif chessPosition[0]:
    if int(chessPosition[1]) % 2== 0:
        print('The chosen square is black')
    else:
        print('The chosen square is white')    