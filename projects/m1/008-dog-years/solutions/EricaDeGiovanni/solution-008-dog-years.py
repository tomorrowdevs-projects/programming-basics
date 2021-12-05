#DOG YEARS

#Write a program that implements the conversion from human years to dog years
human_years = float(input('Insert a number of years to convert in dog years: '))

if human_years > 0:
   # each of the first two human years are 10.5 dog years
   if human_years <= 2:
       dog_years = 10.5 * human_years
       print(f'The equivalent is {dog_years} dog years.')

   # each additional human year are 4 dog years
   else: 
       dog_years = (10.5 * 2) + ((human_years - 2) * 4)
       print(f'The equivalent is {dog_years} dog years.')  

#display an error if the user enters a negative number.
else:
    print('We can\'t convert a negative value!')


    
    

