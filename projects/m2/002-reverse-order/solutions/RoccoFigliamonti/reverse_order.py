"""# Reverse Order

Write a program that reads integers from the user and stores them in an array. 
Use 0 as a sentinel value to mark the end of the input. Once all of the values have been read your program should display them (except for the 0) in reverse order, with one value appearing on each line.
"""


lst = []
while True:
    value = int(input("Please enter a number (0 to stop): "))
    if value == 0:
        break
    else:
        lst.append(value)
    
lst.sort(reverse=True)
print(lst)
for el in lst:
    print(el)



