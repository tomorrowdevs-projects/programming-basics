#variables
year = 4
year_1 = 10.5
year_2 = 21
year_between = year_1-year

print ("Hello, I'm a dog's years calculator!")
print ("Please, insert your age:")
your_age = int(input())

#if your_age is negative
if your_age < 0:
    print ("Error! Input a positive number!")
    your_age = int(input())

#years calculator
if your_age == 1:
    print ("If you are a dog, you are " + str(year_1) + " years old!")
    
elif your_age == 2:
    print ("If you are a dog, you are " + str(year_2) + " years old!")
    
elif your_age == 0:
    print ("If you are a dog, you are " + str(your_age) + " years old!")
    
else:
    year_tot = (your_age*year) + (year_between*2)
    print ("If you are a dog, you are " + str(year_tot) + " years old!")