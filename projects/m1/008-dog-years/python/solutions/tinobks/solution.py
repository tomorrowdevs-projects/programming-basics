years = int(input("Enter any human year and this program will convert it to dog years: "))

if 0 <= years <= 2:
     dog_years = years * 10.5
     print(int(dog_years))

elif years < 0:
    print("You can't enter a negative number")

else:
    dog_years = 21 + ((years - 2)*4)
    print(int(dog_years))

