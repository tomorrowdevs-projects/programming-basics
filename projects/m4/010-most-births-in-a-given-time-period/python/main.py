import os

files_path = os.path.dirname(__file__)+"\\babynames\\"

print("Babynames data set comprehends information between 1880 and 2021")
while True:
    first_year_range = int(input("First year range "))
    last_year_range = int(input("Last year range "))
    if first_year_range >= 1880 and last_year_range <= 2021:
         break
    else:
         print("Input error. Check the year range of data set")

male_name = {
     "name":set(),
     "occurences":0
}

female_name = {
     "name":set(),
     "occurences":0     
}

for file in range(first_year_range,last_year_range+1,1):
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

        if max_occurrences_F > female_name["occurences"]:

            female_name["occurences"] = max_occurrences_F
            #this while loop is to catch the case there are most popular names with the same occurences for the same year
            while max_occurrences_F == int(line[2]):
                female_name["name"].add(line[0])
                line = f.readline().split(",")
                line[2] = line[2][:len(line[2])-1]
                sex = line[1]

        #outside the while loop I need to scroll the file until I found a male name    
        line = f.readline().split(",")
        line[2] = line[2][:len(line[2])-1]
        sex = line[1]

    #Then, i have to check male babynames
    max_occurrences_M = int(line[2])

    if max_occurrences_M > male_name["occurences"]:
         male_name["occurences"] = max_occurrences_M
         while max_occurrences_M == int(line[2]):
                male_name["name"].add(line[0])
                line = f.readline().split(",")
                line[2] = line[2][:len(line[2])-1]

    f.close()

print("The boy’s name and the girl’s name given to the most children during the indicated years are :")
print("MALE:")
for name in male_name["name"]:
     print(name, end=" ")
print("\nFEMALE:")
for name in female_name["name"]:
     print(name, end=" ")