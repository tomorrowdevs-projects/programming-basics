def most_popular_names(name_dict: dict) -> str:
    sort_by_values = list(sorted(name_dict.items(), key = lambda x: x[1], reverse=True))
    names = sort_by_values[0][0]
    # case in which the maximum value has more than one name
    i = 1
    while sort_by_values[0][1] == sort_by_values[i][1]:
        names += ", {}".format(sort_by_values[i][0])
        i += 1
    return names

entered_years = {"initial year": False, "final year": False}
for year in entered_years:
    while not entered_years[year]:
        try:
            input_year = int(input("Enter the {}: ".format(year)))
            if input_year in range(1880,2022):
                entered_years[year] = input_year
                if year == "final year" and entered_years["final year"] < entered_years["initial year"]:
                    print("Error! The final year must be greater than or equal to the initial year.")
                    entered_years[year] = False
            else:
                print("Error! '{}' is not a valid year, enter a year between 1880 and 2021.".format(input_year))
        except ValueError:
            print("Error! You must enter a year between 1880 and 2021.")

initial_year, final_year = entered_years["initial year"], entered_years["final year"]
male_names = {}
female_names = {}
current_year = initial_year
while current_year <= final_year:
    file_to_open = "babynames/yob{}.txt".format(current_year)
    with open(file_to_open) as file:
        for line in file:
            name_data = line.strip().split(",")
            if name_data[1] == "F":
                if name_data[0] not in female_names:
                    female_names[name_data[0]] = int(name_data[2])
                else:
                    female_names[name_data[0]] += int(name_data[2])
            elif name_data[1] == "M":
                if name_data[0] not in male_names:
                    male_names[name_data[0]] = int(name_data[2])
                else:
                    male_names[name_data[0]] += int(name_data[2])
    current_year += 1

if initial_year == final_year:
    print("The most popular male name/s in {} is/are {}.".format(initial_year, most_popular_names(male_names)))
    print("The most popular female name/s in {} is/are {}.".format(initial_year, most_popular_names(female_names)))
else:
    print("The most popular male name/s from {} to {} is/are {}.".format(initial_year, final_year, most_popular_names(male_names)))
    print("The most popular female name/s from {} to {} is/are {}.".format(initial_year, final_year, most_popular_names(female_names)))
