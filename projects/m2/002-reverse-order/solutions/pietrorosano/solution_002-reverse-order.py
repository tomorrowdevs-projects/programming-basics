# Write a program that reads integers from the user and stores them in an array.
# Use 0 as a sentinel value to mark the end of the input.
# Once all of the values have been read your program should display them (except for the 0) in reverse order,
# with one value appearing on each line.

integers = []

while True:
    print("\nEnter an integer (for stop the sequence enter '0')")
    user_input = int(input())
    integers.append(user_input)
    if user_input == 0:
        break

print("\n")
integers.sort()
integers.reverse()

for integer in integers[:len(integers) - 1]:
    print(integer)