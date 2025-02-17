user_input = ""
numbers = []
while user_input != 0:
    user_input = int(input("Enter one integer at time. 0 to stop: "))
    numbers.append(user_input)

numbers.sort()
for n in numbers[1:]:
    print(n)
