
numbers = []
i = 0
y = 0
sum = 0

def average_count(numbers, y, sum):

    if y < len(numbers):
        sum += numbers[y]
        y += 1
        average_count(numbers, y, sum)
    else:
        average = sum/y
        print(f"\nAverage of given numbers is {average:.2f}.\n")
    


print("\n*** Average of given numbers by user ***")

while True:
    try:
        number = int(input("\nInsert an integer number from 1 to 5.000.000.000:(insert 0 as key to stop insert value) "))
        if number == 0 and i == 0:
            print("\nSorry, you can't insert 0 as first value.")
        elif number == 0:
            average_count(numbers, y, sum)
            break
        else:
            numbers.append(number)
            i += 1
        
    except ValueError:
        print(f"\n{ValueError} - Input Error, please try again.. ")
