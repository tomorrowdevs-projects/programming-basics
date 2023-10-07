'''
# DOG YEARS

It is commonly said that one human year is equivalent to 7 dog years.   
However, this simple conversion fails to recognize that dogs reach adulthood in approximately two years. 

As a result, some people believe that it is better to **count each of the first two human years as 10.5 dog years**,
and then **count each additional human year as 4 dog years.**  

Write a program that implements the conversion from human years to dog years described in the previous paragraph.   
Ensure that your program works correctly for:
- conversions of less than two human years
- conversions of two or more human years

Your program should display an appropriate error message if the user enters a negative number.

Example:   
48 human years = 205.0 dog year
'''

print("\nHi folks! This is the program that are you looking from your whole life,"
      "\nbecause it will help you to count correctly your dog's age.")

human_years = int(input("\nLet's try together. Please insert from how many years do you have your dog: "))

while human_years < 0:
    human_years = int(input("\nOh oh, it seems you insert a negative number. Please try again: "))

if human_years < 2:
    dog_age = human_years*10.5
else:
    dog_age = (human_years-2)*4 + 21

print(f"\nYour real dog's age is {dog_age:.1f}.")
