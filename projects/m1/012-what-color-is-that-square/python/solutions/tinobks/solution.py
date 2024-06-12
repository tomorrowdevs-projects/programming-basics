x = ["a", "c", "e", "g"]
y = ["b", "d", "f", "h"]

position = str.lower(input("Enter a chess board position (for example 'a1', 'c3' etc.) and this program will tell you if the square is black or white: "))
letter = position[0]
number = int(position[1])

if letter in x:
    if number % 2 == 0:
        print("The square is WHITE")
    else: print("The square is BLACK")

elif letter in y:
    if number % 2 == 0:
        print("The square is BLACK")
    else: print("The square is WHITE")

