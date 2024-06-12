#read integers from the user and stores them in an array. 
entred_number = int(input('Insert a number (press 0 to quit): '))
entred_numbers_list = []

# continue reading values until the user enters 0. 
while entred_number != 0:
    entred_numbers_list.append(entred_number)

    entred_number = int(input('Insert a number (press 0 to quit): '))

# display all of the values entered by the user (except for the 0) 
# in reverse order, with one value appearing on each line.
entred_numbers_list.reverse()

for n in entred_numbers_list:
    print(n)