print(
    "This script reads every file in the data set in a range of years that user provides and identifies all of the "
    "that were most popular in at least one year. It outputs two lists: one containing the most popular names for boys "
    "and the other containing the most popular names for girls")

INITIAL_YEAR = int(input("Type starting year: "))
LAST_YEAR = int(input("Type last year: "))

DATA_SET_PATH = "./names/"


def find_number_one_names(file, females_list, males_list):
    try:
        with open(file, "r") as file:
            lines = file.readlines()
            file_line_number = 0
            for line in lines:
                line = line.split(",")
                # if file_line_number is equal to 0, we are in the first line, where we can found the top female name for that year
                if file_line_number == 0:
                    female_name = line[0]
                    # here we assure that the name that we will add to the list is unique
                    if female_name not in females_list:
                        females_list.append(female_name)
                    file_line_number += 1
                # when we reach the first line where sex (line[1]) is equal to male we have found the top male name for that year
                if line[1] == "M":
                    male_name = line[0]
                    # here we assure that the name that we will add to the list is unique
                    if male_name not in males_list:
                        males_list.append(male_name)
                    break
    except IndexError as err:
        print(err)
    except FileNotFoundError as err:
        print(err)


def main():
    # Lists where there will be added names that reached number one position in at least one year.
    males = []
    females = []
    for year in range(INITIAL_YEAR, LAST_YEAR + 1):
        file_name = DATA_SET_PATH + "yob" + str(year) + ".txt"
        find_number_one_names(file_name, females, males)
    print()
    print("Top female names:")
    for name in females:
        print(name)
    print()
    print("Top male names:")
    for name in males:
        print(name)


if __name__ == "__main__":
    main()
