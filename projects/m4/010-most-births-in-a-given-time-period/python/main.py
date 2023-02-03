#two dictionaries that will contain the names and the time
#the name was used in a given range of years.
boys = {}
girls = {}

#asking user to supply the first and last years of the range to analyze
print("Enter a range of years between 1900 and 2012 to find out the most given name for boys and girls within the given range.")
first_year = int(input("Enter the starting year: "))
last_year = int(input("Enter the last year: "))
if first_year < 1900 or first_year > 2012:
    print("Both years must be between 1900 and 2012.")
    exit()
if last_year < first_year or last_year < 1900 or last_year > 2012:
    print("Both years must be between 1900 and 2012 and the last year can't be before the first year.")
    exit()

#checking every file in the given range of years
for year in range(first_year, last_year + 1):

    #counting how many times a male name was given
    with open("babynames/{}boys.txt".format(year)) as file:
        for name in file:
            #creating a list containing name[0], gender[1] and the times the name was used[2].
            name_data = name.split(",")
            #adding the name to the dictionary, else if it's already in, adding the time the name was given
            if name_data[0] not in boys:
                boys[name_data[0]] = int(name_data[2])
            else:
                boys[name_data[0]] += int(name_data[2])

    #repeating the same for female names
    with open("babynames/{}girls.txt".format(year)) as file:
        for name in file:
            name_data = name.split(",")
            if name_data[0] not in girls:
                girls[name_data[0]] = int(name_data[2])
            else:
                girls[name_data[0]] += int(name_data[2])

#identifying the name that was used the most (1 name for boys and 1 name for girls)
max_boys = max(boys.values())
max_girls = max(girls.values())
for name, value in boys.items():
    if value == max_boys:
        print(("The most given name for boys from {} to {} is {}.") .format(first_year, last_year, name))
for name, value in girls.items():
    if value == max_girls:
        print(("The most given name for girls from {} to {} is {}.") .format(first_year, last_year, name))