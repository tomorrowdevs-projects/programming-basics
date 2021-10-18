dog_years = (int(input("Insert dog age:\n")))

def calculate_dog_year(dog_years):
    if 0 < dog_years <= 2:
        young = dog_years * 10.5
        print("The dog's age in human years is:\n" + str(young))
    elif dog_years > 2:
        adult = ((dog_years - 2) * 4) + 21
        print("The dog's age in human years is:\n" + str(adult))
    elif dog_years == 0:
        print("The age is 0")

calculate_dog_year(dog_years)
