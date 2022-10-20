# Convert human years to dog years:
# The first two human years count as 10.5 dog years
# additional years count as 4 dog years
#
# ensure the program will convert less than two human years and more than two human years correctly
# Display an error if USER input a negative number 

human_years = float(input('How much human years you want to convert?'))
dog_first_ratio = 10.5
dog_second_ratio = 4

if human_years < 0:
    print('ERROR: input MUST be a positive number')

elif human_years <= 2:
    dog_age = human_years * dog_first_ratio
    print(f'{human_years} human years equals {dog_age} years')

elif human_years > 2:
    dog_first_age = 2 * dog_first_ratio
    dog_second_age = (human_years - 2) * dog_second_ratio 
    dog_age = dog_first_age + dog_second_age
    print(f'{human_years} human years equals {dog_age} years')
