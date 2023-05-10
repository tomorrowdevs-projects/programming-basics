number = float(input("Enter a value: "))
while number == 0:
    print("Error\n")
    number = float(input("Enter a value: "))


for i in range(1,1000):
    num = float(input("Enter another value: "))
    number = number + num

    if num == 0:
        break
average = float(number/i)

print(f"The average of these values is {average}.")


