print("Welcome to the Fizz-Buzz game! We will be starting soon")

num = list(range(1, 101))

for num in range(1,101):
    if num % 3 == 0 and num % 5 == 0:
        print("Fizz Buzz!")
    elif num % 3 == 0:
        print("Fizz!")
    elif num % 5 == 0:
        print("Buzz!")
    else:
        print(num)