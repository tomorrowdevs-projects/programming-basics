#However this simple conversion fails to recognize that dogs reach adulthood in approximately two years. 
#As a result, some people believe that it is better to count each of the first two human years as 10.5 dog years, and then count each additional human year as 4 dog years
#Write a program that implements the conversion from human years to dog years described in the previous paragraph. 
#Ensure that your program works correctly for conversions of less than two human years and for conversions of two or more human years


humanYearslife = int(input('Please put the number of your dogs years life'))

if humanYearslife >= 100:
    humanYearslife_2 = humanYearslife -2
    DogYearslife_1 = 10.5 * 2
    DogYEarslife_2 = 4 * humanYearslife
    total = DogYearslife_1 + DogYearslife_2
    print (f'the number of your dogs years life converted from Human years perspective is: {total}')

elif humanYearslife <= 0: 
    print('Error.Age cannot be negative or under zero')
    
else:
    total = humanYearslife * 10.5
    print(f'the number of dogs years life converted from Human years perspective is: {total}')


