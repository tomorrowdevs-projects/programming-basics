position = input("Insert the position of the chess in the following format: 'A2', 'C6' etc...\n")
letter = position[0]
number = int(position[1])
if 0 < number < 9 and (letter == "A" or letter == "B" or letter == "C" or letter == "D" or letter == "E" or letter == "F" or letter == "G" or letter == "H"):
    if number % 2 == 0:
        if letter == "A" or letter == "C" or letter == "E" or letter == "G":
            print("Chess is positionated in light square")
        else:
            print("Chess is positionated in dark square")
    else:
        if letter == "A" or letter == "C" or letter == "E" or letter == "G":
            print("Chess is positionated in dark square")
        else:
            print("Chess is positionated in light square")
else:
    print("invalid syntax")