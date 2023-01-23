
chessboard_position = str(input("Insert chessboard_position ---> "))

selected_column = chessboard_position[0]
selected_crossbar_string = chessboard_position[1]

selected_crossbar_integer = int(selected_crossbar_string)

print(f"Selected column: {selected_column}")
print(f"Selected crossbar: {selected_crossbar_integer}")

columns = {"a": 1, "b": 2, "c":3, "d": 4, "e": 5, "f": 6, "g": 7, "h": 8}

column_number = columns[selected_column]


    
if (column_number % 2 != 0 and selected_crossbar_integer % 2 !=0) or (column_number % 2 == 0 and selected_crossbar_integer % 2 ==0):
    print(f"{chessboard_position} is BLACK")

elif (column_number % 2 != 0 and selected_crossbar_integer % 2 ==0) or (column_number % 2 == 0 and selected_crossbar_integer % 2 !=0):
    print(f"{chessboard_position} is WHITE")
    
else:
    print("Be careful! You've just chosen coordinates that don't exist on a normal board!")
# Quote: Your program may assume that a valid position will always be entered. 
#It does not need to perform any error checking.
#It would be too complicated, however by this ELSE... man can enter more conditions