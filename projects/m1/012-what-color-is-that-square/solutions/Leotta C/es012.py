letters={"A":1,"B":2,"C":3,"D":4,"E":5,"F":6,"G":7,"H":8}
square=input("Enter the name of a chess square: ")
square_number=int(square[1])
square_letter= letters[square[0]]
sum=square_letter+square_number
if sum%2==0:
    print("This square is black.")
else:
    print("This square is white.")