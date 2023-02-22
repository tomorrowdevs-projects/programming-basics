# Read width and length as integer keyborad input
width = int(input("Enter Width: "))
length = int(input("Enter Length: "))

# Calculate Room area. if the sizes is negative, show an error message
if width > 0 and length > 0:
    area_room = (width * length)
    print("Area Room: ", area_room)
else:
    print("Impossible to Calculate: if one of the sizes is negative")