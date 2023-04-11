def answer(number):
    if number % 15 == 0:
        return "fizz buzz"
    if number % 3 == 0:
        return "fizz"
    if number % 5 == 0:
        return "buzz"
    return number

for number in range(1,101):
    print(f"The answer for the number {number} is {answer(number)}")
