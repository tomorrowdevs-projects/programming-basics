# Write a program that reads integers from the user and stores them in an array.
# Your program should continue reading values until the user enters 0.
# Then it should display all of the values entered by the user (except for the 0) in ascending order,
# with one value appearing on each line. Use either the sort method or the sorted function to sort the array.

integers = []

while True:
    print("\nEnter a number (for stop the sequence enter '0')")
    user_input = int(input())
    integers.append(user_input)
    if user_input == 0:
        break
print("\n")
integers.sort()
for integer in integers[1:]:
    print(integer)