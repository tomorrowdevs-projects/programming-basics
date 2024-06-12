year = int(input("Please insert a year: "))

if (year % 400) == 0:
    print("It's a leep year!")
elif (year % 100) == 0:
    print("It's not a leep year!")
elif (year % 4) == 0:
    print("It's a leep year!")
else:
    print("It's not a leep year!")
