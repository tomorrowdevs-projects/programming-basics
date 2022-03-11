#It is commonly said that one human year is equivalent to 7 dog years. 
#However this simple conversion fails to recognize that dogs reach adulthood in approximately two years. 
#As a result, some people believe that it is better to count each of the first two human years as 10.5 dog 
# years, and then count each additional human year as 4 dog years.
#Write a program that implements the conversion from human years to dog years described in the previous 
#paragraph. 
#Ensure that your program works correctly for conversions of less than two human years and for conversions 
# of two or more human years. 
#Your program should display an appropriate error message if the user enters a negative number.
human = 1
dog_2y = human * 10.5
dog_3y= human *4
print("Welcome, i'm a program that tells you how many years would you have if you were a dog.")
years = int(input('Please type here your age:'))
if years <0:
    years = 0
    print("If you're writing this i don't think you have a negative number of years, unless you're from the future.")
if years <=2:
    dog_age = years * 10.5
    print("Your age in dog years is: " + "%.2f" %dog_age + "years.")
if years >=3:
    dog_adult = ((years - 2) * 4) + 21
    print("Your Dog age is: " + "%.2f" %dog_adult + "years.")

