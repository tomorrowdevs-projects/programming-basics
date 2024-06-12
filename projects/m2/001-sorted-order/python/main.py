list_integers = []

integer = input("Enter an integer (enter 0 to quit): ")

if integer.isdigit() == False:
    print("You can only enter integers.")
else:
    while integer != "0":
        list_integers.append(int(integer))
        integer = input("Enter an integer (enter 0 to quit): ")

list_integers.sort()

for i in list_integers:
    print(i)