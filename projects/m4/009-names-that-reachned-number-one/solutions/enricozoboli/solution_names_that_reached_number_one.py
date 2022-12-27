import os

PATH = "009-names-that-reachned-number-one/solutions/enricozoboli/baby_names"
def open_read_files(path):
    """
    Takes a path to a directory, opens every files(full of yearly most used 
    names in descending order) in that directory, takes the first element of 
    the first line, and puts it in a list of the most used name.
    Parameter:
        A relative path to a directory.
    Return:
        A list.
    """
    
    try:
        files_lst = os.listdir(PATH)
        boys_names = []
        girls_names = []
        for file in files_lst:
            with open(os.path.join(path, file)) as reader:
                if 'Boys' in file:
                    most_used = reader.readline().split()
                    if most_used[0] not in boys_names:
                        boys_names.append(most_used[0])
                if 'Girls' in file:
                    most_used = reader.readline().split()
                    if most_used[0] not in girls_names:
                        girls_names.append(most_used[0])
        return boys_names, girls_names
    except (FileNotFoundError) as fnf_error:
        print(fnf_error)
        print("File doesn't exist or wrong path")

        
def main():
    try:
        boys_names, girls_names = open_read_files(PATH)
        print("Most used boy's names from 1900 to 2012 "
        "(for at least one year):")
        for boy_name in boys_names:
            print(f"{boy_name}")
        print("\nMost used girl's names from 1900 to 2012 "
        "(for at least one year): ")
        for girl_name in girls_names:
            print(f"{girl_name}")
    except TypeError as tp_error:
        print(tp_error)
        print("The file isn'a a list")

if __name__ == "__main__":
    main()