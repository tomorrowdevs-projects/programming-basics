# Data set directory
DATA_SET_PATH = "../../../009-names-that-reachned-number-one/solutions/federicosiddi/names/"



def find_distinct_names(file, female_names_list, male_names_list):
    try:
        with open(file, "r") as file:
            while True:
                line = file.readline()
                if not line:
                    break
                line = line.rstrip().split(",")
                # line[1] corresponds to the sex because a line in the text file is like this: "Robert, M, 5644"
                if line[1] == "F":
                    female_name = line[0]
                    # if the name is not in the names_list we have a distinct name so we add it to the list
                    if female_name not in female_names_list:
                        female_names_list.append(female_name)                    
                elif line[1] == "M":
                    male_name = line[0]
                    if male_name not in male_names_list:
                        male_names_list.append(male_name)
    except IndexError as err:
        print(err)
    except FileNotFoundError as err:
        print(err)


def main():
    # list of all unique female names
    females = []
    # list of all unique male names
    males = []

    # here we can change the year range of the files to analyze
    for year in range(2019, 2020 + 1):
        file_name = DATA_SET_PATH + "yob" + str(year) + ".txt"
        find_distinct_names(file_name, females, males)
    print("Unique female names:")
    print(sorted(females))
    print()
    print("Unique male names:")
    print(sorted(males))

if __name__ == "__main__":
    main()
