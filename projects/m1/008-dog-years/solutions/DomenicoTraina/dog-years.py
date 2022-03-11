dog_years= int(input("Enter dog years: "))

if (dog_years<0):
    print("Please enter a value > 0")
if (0<dog_years<=2):
    human_years=dog_years*5.25
    print("{} dog years are {} human years".format(dog_years,human_years))
if (dog_years>2):
    human_years=10.5+(dog_years-2)*4
    print("{} dog years are {} human years".format(dog_years,human_years))

