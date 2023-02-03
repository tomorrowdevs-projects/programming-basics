#two lists that will contain the most popular names for boys
#and the other containing the most popular names for girls.
boys = []
girls = []

#reading every file in the baby names data set (The data set includes data for every year from 1900 to 2012)
for year in range(1900, 2013):

    #identifying all of the male names that were most popular in at least one year
    with open("babynames/{}boys.txt".format(year)) as file:
        #reads the first line (the most popular name in the year)
        name = file.readline()
        #creating a list containing name[0], gender[1] and the times the name was used[2].
        name_data = name.split(",")
        #appending name to conform list if it's not already in
        if name_data[0] not in boys:
            boys.append(name_data[0])

    #repeating the same for the female names
    with open("babynames/{}girls.txt".format(year)) as file:
        name = file.readline()
        name_data = name.split(",")
        if name_data[0] not in girls:
            girls.append(name_data[0])

#output the lists
print("The most popular names for boys from 1900 to 2012:")
print(*boys, sep = ", ")
print(" ")
print("The most popular names for girls from 1900 to 2012:")
print(*girls, sep = ", ")