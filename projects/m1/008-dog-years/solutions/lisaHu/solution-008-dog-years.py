#It is commonly said that one human year is equivalent to 7 dog years. 
#However this simple conversion fails to recognize that dogs reach adulthood in approximately two years. 
#As a result, some people believe that it is better to count each of the first two human years as 10.5 dog years, and then count each additional human year as 4 dog years.
#Write a program that implements the conversion from human years to dog years described in the previous paragraph. 
#Ensure that your program works correctly for conversions of less than two human years and for conversions of two or more human years. 
#Your program should display an appropriate error message if the user enters a negative number.


ageHumanYears = float(input("How old is your dog?\n"))

if ageHumanYears < 0:
    print("Please, refresh and enter a valid age fot your dog.")
elif ageHumanYears <= 2:
    ageDogYears = 10.5 * ageHumanYears
    print("Your dog has " + str(ageDogYears) + " in dog years!!")
elif ageHumanYears > 2:
    ageDogYears = 10.5 * 2 + ((ageHumanYears - 2) * 4)
    ageDogYears = int(ageDogYears)
    print("Your dog has " + str(ageDogYears) + " in dog years!")