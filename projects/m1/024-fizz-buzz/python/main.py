for number in range(1,101):
    print(number,":",end=" ")
    if number % 3 == 0:
        if number % 5 == 0:
            print("fizz buzz")
        else:
            print("fizz")
    else:
        if number % 5 == 0:
            print("buzz")
        else:
            print(number)
