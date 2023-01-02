male_names = set()
female_names = set()
for year in range(1880,2022):
    file_to_open = "babynames/yob{}.txt".format(year)
    with open(file_to_open) as file:
        for line in file:
            name_data = line.strip().split(",")
            if name_data[1] == "F":
                female_names.add(name_data[0])
            else:
                male_names.add(name_data[0])

print("Male names:", male_names)
print("Female names:", female_names)