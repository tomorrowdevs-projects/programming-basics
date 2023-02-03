#two lists that will contain every distinct names for boys
#and the other containing every distinct popular names for girls.
boys = []
girls = []

#checking every file in the baby names data set (The data set includes data for every year from 1900 to 2012)
for year in range(1900, 2013):

    #identifying all of the distinct male names
    with open("babynames/{}boys.txt".format(year)) as file:
        for name in file:
            #creating a list containing name[0], gender[1] and the times the name was used[2].
            name_data = name.split(",")
            #appending name to the list if it's not already in
            if name_data[0] not in boys:
                boys.append(name_data[0])

    #repeating the same for female names
    with open("babynames/{}girls.txt".format(year)) as file:
        for name in file:
            name_data = name.split(",")
            if name_data[0] not in girls:
                girls.append(name_data[0])

#output the lists
print("Every distinct name used for a boy in the baby names data set:")
print(*boys, sep = ", ")
print(" ")
print("Every distinct name used for a girl in the baby names data set:")
print(*girls, sep = ", ")       