import glob

PATH = "009-names-that-reachned-number-one/solutions/enricozoboli/baby_names"

def iter_years(path, starting_year, ending_year):
    """
    Takes a path to a directory, and two years as starting and ending
    points. It opens every .txt files between the range of years, and append
    the most common name for every years to a list. The names of the files
    must start with the year.
    Parameter:
        relative path to dir  and two string.
    Return:
        two lists.
    """
    boys_name = []
    girls_name = []
    for i in range(int(starting_year), (int(ending_year))+1):
        file_name = str(i) + '*.txt'
        for path_to_file in glob.glob(path + file_name):
            with open(path_to_file) as reader:
                most_used = reader.readline().split()
                if 'boys' in path_to_file.lower() and\
                    most_used not in boys_name:
                    boys_name.append((most_used[0]))
                if 'girls' in path_to_file.lower()and\
                    most_used not in girls_name:
                    girls_name.append((most_used[0]))
    return boys_name, girls_name


def most_common(boys_name, girls_name):
    """
    Takes two lists with multiple element and return only the
    most common element of each list.
    Parameter:
        two lists
    Return:
        two strings
    """
    common_boy_name = max(set(boys_name), key=boys_name.count)
    common_girl_name = max(set(girls_name), key=girls_name.count)
    return common_boy_name, common_girl_name

def main():
    starting_year = input("Enter the starting year: ")
    ending_year = input("Enter the ending year: ")
    try:
        boys_lst, girls_lst = iter_years(PATH, starting_year, ending_year)
        common_boy_name, common_girl_name = most_common(boys_lst, girls_lst)
    except (FileNotFoundError) as fnf_error:
        print(fnf_error)
        print("Files don't exists or wrong path")
    except ValueError as vle_error:
        print(vle_error)
        print("Files don't exists or wrong path")
    else:
        print(f"Most common boy name from {starting_year}"
        f" to {ending_year} is: {common_boy_name}")
        print(f"Most common girl name from {starting_year}"
        f" to {ending_year} is: {common_girl_name}")
 
if __name__ == "__main__":
    main()

