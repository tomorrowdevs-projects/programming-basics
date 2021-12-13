import os, glob
DATA_PATH = "009-names-that-reachned-number-one/solutions/enricozoboli/baby_names"

def make_list(name, filename, unique_boys_lst=[], unique_girls_lst=[]):
    if name not in unique_boys_lst and 'Boys' in filename:
        unique_boys_lst.append(name)
    elif name not in unique_girls_lst and 'Girls' in filename:
        unique_girls_lst.append(name)
    return unique_boys_lst, unique_girls_lst

def print_names_list(boys, girls):
    print("Boys names list: ")
    for boy_name in boys:
        print(boy_name)
    print("\n")
    print("Girls names list: ")
    for girl_name in girls:
        print(girl_name)
    
def main(PATH):
    try:
        for filename in glob.glob(os.path.join(DATA_PATH, '*.txt')):
            with open(filename) as reader:
                for line in reader.readlines():
                    name = line.split()[0]
                boys_names, girls_names = make_list(name, filename)
        print_names_list(boys_names, girls_names)
    
    except UnboundLocalError as UnLE_error:
        print(UnLE_error)
        print("File doesn't exist or wrong path, list cannot be created.")

if __name__ == "__main__":
    main(DATA_PATH)