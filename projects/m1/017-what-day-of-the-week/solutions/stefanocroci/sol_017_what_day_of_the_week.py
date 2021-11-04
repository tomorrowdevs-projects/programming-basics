# Create list of day of week
week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

# Ask the user for an input
year = int(input('Please insert a year: '))

# Calculate the output
day = ((year + ((year-1) // 4) - (year - 1) // 100) + ((year - 1) // 400 )) % 7

# Select the ourput from week and format it
day_of = week[day]
day_of = day_of.capitalize()

# Dislpay the output
if year < 2021:
    print('The first day of that year was ' + str(day_of))
elif year > 2021:
    print('The first day of that year will be ' + str(day_of))
elif year == 2021:
    print('This year the first day has been ' + str(day_of))