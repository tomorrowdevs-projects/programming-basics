#variables
black = ["a", "c", "e", "g"]
white = ["b", "d", "f", "h"]
numbers = ["1", "2", "3", "4", "5", "6", "7", "8"]

#input a position on chessboard
print ("Do you want to known what color is your position in chessboard?")
print ("Insert your column's letter (a-h) on chessboard:")
letter = str(input())
print ("Insert your row's number (1-8) on chessboard:")
number = int(input())
if letter in black:
    if number%2 == 0:
        print ("The color of your position is white!")
    else:
        print ("The color of your position is black!")
elif letter in white:
    if number%2 == 0:
        print ("The color of your position is black!")
    else:
        print ("The color of your position is white!")    
        
else:
    print ("Error! Your position is not valid!") 