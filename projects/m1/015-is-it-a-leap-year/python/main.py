leap_year_input=int(input("Please type the year: "))

if leap_year_input % 400==0:
    print("this one is a leap year")
elif leap_year_input % 100==0:
    print("this one is not a Leap Year!")
elif leap_year_input % 4==0:
    print("it is a leap year")
else:
    print("it is not a leap year")