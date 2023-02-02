print("Insert a collection of number. I'll calculate the average. If you want to stop please insert 0")

count = 0
number = float(input("First number "))
number_sum = 0

while number != 0:
    count += 1
    number_sum += number
    number = float(input("Next number "))
    

if count != 0:
    average = number_sum / count
    print("The average is {}".format(average))
else:
    print("Insert one number at least")
