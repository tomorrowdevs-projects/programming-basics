for numbers in range(1,101):
    if numbers % 3 == 0 and numbers % 5 == 0:
        print(numbers,": Fizz buzz!")
    elif numbers % 5 == 0:
        print(numbers,": Buzz!")
    elif numbers % 3 == 0:
        print(numbers,": Fizz!")