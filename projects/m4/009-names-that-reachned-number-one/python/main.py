male_names = []
female_names = []
for year in range(1880,2022):
    file_to_open = "babynames/yob{}.txt".format(year)
    with open(file_to_open) as file:
        line = file.readline()
        name_data = line.strip().split(",")
        # If it's not already in the list, I'll add the most popular female name in that year
        if name_data[1] == "F" and name_data[0] not in female_names:
            female_names.append(name_data[0])
        # I continue to read the file until I find a male name
        while name_data[1] == "F":
            line = file.readline()
            name_data = line.strip().split(",")
        # If it's not already in the list, I'll add the most popular male name in that year
        if name_data[1] == "M" and name_data[0] not in male_names:
            male_names.append(name_data[0])

print("The most popular male names from 1880 to 2021 are:", male_names)
print("The most popular female names from 1880 to 2021 are:", female_names)