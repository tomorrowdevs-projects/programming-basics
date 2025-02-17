# ask to user the dog's age
dog_years = (int(input("Insert dog age: ")))

# compute the equivalent human age, multiplying first two years of age by 10.5 and the next others 4
if 0 < dog_years <= 2:
    young = dog_years * 10.5
    print("The dog's age in human years is:\n" + str(young))
elif dog_years > 2:
    adult = ((dog_years - 2) * 4) + 21
    print("The dog's age in human years is:\n" + str(adult))
elif dog_years == 0:
    print("The age is 0")
