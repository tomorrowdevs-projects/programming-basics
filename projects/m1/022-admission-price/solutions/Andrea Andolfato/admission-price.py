
sum = 0

guests = int(input("Please insert how many guests: "))
for i in range(guests):
    age = int(input("Please insert the age of the guests: "))
    if age <= 2:
        price = 0
    if age >= 3 <= 12:
        price = 14
    if age >= 13 <= 65:
        price = 23
    if  age > 66:
        price = 18
    sum += price
    print("Total price is" "${:.2f}".format(sum))