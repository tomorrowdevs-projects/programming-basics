#empty list to contain integers
integers = []

while True:
    new_int = int(input('Enter an integer (0 to break): '))
    #loop until input is 0
    #otherwise, insert new integer in list and sort the list
    if new_int == 0:
        break
    else:
        integers.append(new_int)
        integers.sort()

print(*integers, sep = '\n')