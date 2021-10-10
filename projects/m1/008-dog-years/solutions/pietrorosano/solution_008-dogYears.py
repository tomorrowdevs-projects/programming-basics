# It is commonly said that one human year is equivalent to 7 dog years. However this simple conversion fails to recognize that dogs reach adulthood in approximately two years. As a result, some people believe that it is better to count each of the first two human years as 10.5 dog years, and then count each additional human year as 4 dog years. Write a program that implements the conversion from human years to dog years described in the previous paragraph. Ensure that your program works correctly for conversions of less than two human years and for conversions of two or more human years. Your program should display an appropriate error message if the user enters a negative number.

print("\nHow old is your dog?")
dog_age = int(input())
if dog_age <= 2 & dog_age > 0:
    dog_human_age = float(dog_age * 10.5)
    print("\nYour dog's human age is: " + str(dog_human_age))
elif dog_age > 2:
    dog_human_age = 21 + ((dog_age - 2) * 4)
    print("\nYour dog's human age is: " + str(dog_human_age))
if dog_age <= 0:
    dog_human_age = "impossible to calculate"
    print("Error! Enter a correct age for your dog")

