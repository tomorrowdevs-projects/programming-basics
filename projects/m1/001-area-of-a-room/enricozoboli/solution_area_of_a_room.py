print("Welcome! Please choose the shape of your room from the following:")

room_shape =input("(circle, square, rectangle, triangle, tesseract) ")

if room_shape.lower() == "circle":
    room_radius = float(input("Insert radius in meters: "))
    room_area = (room_radius ** 2) * 3.1416
    print(f"The room's area is {room_area} meters")

elif room_shape.lower() == "square":
    room_side_lenght = float(input("Insert side's lenght in meters: "))
    room_area = room_side_lenght ** 2
    print(f"The room's area is {room_area} meters")

elif room_shape.lower() == "rectangle":
    room_lenght = float(input("Insert room's lenght in meters: "))
    room_widht = float(input("Insert room's widhtin meters: "))
    room_area = room_lenght * room_widht
    print(f"The room's area is {room_area} meters")

elif room_shape.lower() == "triangle":
    room_height = float(input("Enter room's height in meters: "))
    room_base = float(input("Enter room's base in meters: "))
    room_area = (room_height * room_base) / 2
    print(f"The room's area is {room_area} meters")

elif room_shape.lower() == "tesseract":
    print("C'mon you are not in a black hole!")

else:
    print("Wrong value, try again")
