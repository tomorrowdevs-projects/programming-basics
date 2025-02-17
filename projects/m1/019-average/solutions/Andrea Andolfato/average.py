
number = 1
sum = 0
count = 0

while number != 0:
    number = int(input("Please insert a number: "))
    if number != 0:
        sum += number
        count += 1
        print("Total sum is:", sum)
        print("Total count is: ", count)
        media = sum/count
        print("La media è: ", media)
    elif number == 0:
        print("La media è", media)
        print("You quit")