print("To know the average of your numbers, type one number at a time followed by enter and type 0 when all of your numbers are written")
numbers = []
while 0 not in numbers:
    number = int(input("Enter the number and type 0 wehn you're finished:"))
    if number == 0 and len(numbers) == 0:
        print("You can't have only 0 as a numbers, you eliminate my purpose in lif eby doing so")
    elif number == 0:
        average = sum(numbers) / len(numbers)
        print("Your average is ", "%.2f" % average)
    numbers.append(number)