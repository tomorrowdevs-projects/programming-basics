"""# Sorted Order

Write a program that reads integers from the user and stores them in an array. 
Your program should continue reading values until the user enters 0. 
Then it should display all of the values entered by the user (except for the 0) in ascending order, with one value appearing on each line. 
Use either the sort method or the sorted function to sort the array.
"""

lst = []
while True:
    value = int(input("Please enter a number (0 to stop): "))
    if value == 0:
        break
    else:
        lst.append(value)
    
lst.sort()
print(lst)
for el in lst:
    print(el)



