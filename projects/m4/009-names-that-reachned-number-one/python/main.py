import os

files_path = os.path.dirname(__file__)+"\\babynames\\"

popular_female_name = set()
popular_male_name = set()

for file in range(1880,2022,1):
    file_name = "yobXXXX.txt"
    file_name = file_name.replace("XXXX",str(file))
    
    f = open(files_path+file_name)
    
    #create a list of informations line in file [babyname,sex,name occurences]
    line = f.readline().split(",")
    #to remove last \n character
    line[2] = line[2][:len(line[2])-1]

    max_occurrences_F = int(line[2])
    sex = line[1]

    while sex == "F":

        #this while loop is to catch the case there are most popular names with the same occurences for the same year
        while max_occurrences_F == int(line[2]):
            popular_female_name.add(line[0])
            line = f.readline().split(",")
            line[2] = line[2][:len(line[2])-1]
            sex = line[1]

        #outside the while loop I need to scroll the file until I found a male name    
        line = f.readline().split(",")
        line[2] = line[2][:len(line[2])-1]
        sex = line[1]

    #Then, i have to check male babynames
    max_occurrences_M = int(line[2])

    while max_occurrences_M == int(line[2]):
        popular_male_name.add(line[0])
        line = f.readline().split(",")
        line[2] = line[2][:len(line[2])-1]

    f.close()

print("The most popular female name between 1880 and 2021 are: ")
for name in popular_female_name:
    print(name,end= " ")


print("\nThe most popular male name between 1880 and 2021 are: ")
for name in popular_male_name:
        print(name,end= " ")

