user_year = int(input("Insert a year: "))


if user_year % 400 == 0 or (user_year % 100 != 0 and user_year % 4 == 0):
    year = "a leap"

else:
    year = "not a leap"

print(f"\n{user_year} is {year} year.\n")