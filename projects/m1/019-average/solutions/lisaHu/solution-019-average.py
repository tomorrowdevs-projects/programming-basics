numbers = []

while(True):
    value = int(input('Enter a number (enter 0 to print the average):  '))
    numbers.append(value)
    sumList = sum(numbers)
    average = sumList / len(numbers)
    if value == 0:
        print('The average value is ' + str(round(average, 2)))
        break
