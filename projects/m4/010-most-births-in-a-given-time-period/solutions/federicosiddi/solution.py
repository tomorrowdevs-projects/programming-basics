print(
    "This script shows which names were used most often within a time period.")

INITIAL_YEAR = int(input("Type starting year: "))
LAST_YEAR = int(input("Type last year: "))

DATA_SET_PATH = "../../../009-names-that-reachned-number-one/solutions/federicosiddi/names/"


def find_most_used_names(file, females_dict, males_dict):
    try:
        with open(file, "r") as file:
            lines = file.readlines()
            for line in lines:
                line = line.rstrip().split(",")
                # line[1] corresponds to the sex because a line in the text file is like this: "Robert, M, 5644"
                # line[2] corresponds to the number of births
                if line[1] == "F":
                    female_name = line[0]
                    births = int(line[2])
                    if female_name not in females_dict:
                        females_dict[female_name] = births
                    else:
                        females_dict[female_name] += births
                    
                elif line[1] == "M":
                    male_name = line[0]
                    births = int(line[2])
                    if male_name not in males_dict:
                        males_dict[male_name] = births
                    else:
                        males_dict[male_name] += births

    except IndexError as err:
        print(err)
    except FileNotFoundError as err:
        print(err)


def main():
    # dictionaries where will be stored names with number of births associated
    males = {}
    females = {}
    for year in range(INITIAL_YEAR, LAST_YEAR + 1):
        file_name = DATA_SET_PATH + "yob" + str(year) + ".txt"
        find_most_used_names(file_name, females, males)
    print()
    print("Top female names:")
    top_female_births = max(females.values())
    for name in females:
        if females[name] == top_female_births:
            print(name)
    print()
    print("Top male names:")
    top_male_births = max(males.values())
    for name in males:
        if males[name] == top_male_births:
            print(name)


if __name__ == "__main__":
    main()
