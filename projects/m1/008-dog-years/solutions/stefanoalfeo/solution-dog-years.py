def found_dog_age():
    global age_dog
    if 0 <= age_dog < 1:
        print("dog's age in dog's years is 0 year")
    elif 1 <= age_dog < 2:
        print("dog's age in dog's years is 10.5 years")
    elif age_dog == 2:
        print("dog's age in dog's years is 21 years")
    elif age_dog > 2:
        remain_years = age_dog - 2
        age_dog = 21 + (remain_years * 4)
        print("dog's age in dog's years is " + str(age_dog) + " years")
        
age_dog = int(input("insert dog's age in human years\n"))

if age_dog < 0:
    while age_dog < 0:
        print("ERROR! Insert a positive number")
        age_dog = int(input("insert dog's age in human years\n"))
    found_dog_age()
else:
    found_dog_age()

