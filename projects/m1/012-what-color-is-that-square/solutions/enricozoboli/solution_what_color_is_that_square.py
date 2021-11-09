user_position = input("Enter your position: ")

# Check if the column start whit white or black square
if user_position[0].lower() in "aceg":
    
    # Check if the row is even or odd 
    if int(user_position[1]) % 2 == 0:
        square_color = "white"
    else:
        square_color = "black"

else:
    
    if int(user_position[1]) % 2 == 0:
        square_color = "black"
    else:
        square_color = "white"

print(f"You're on a {square_color} square.")