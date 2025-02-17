unsorted_int = []

# Sort input from unsorted_int list and return the reversed
def sort_input(unsorted_int):
    sorted_int = sorted(unsorted_int)
    reverse_list = sorted_int[::-1]
    return reverse_list

def print_list(sorted_int):
    for elem in sorted_int:
        print(elem)

def collect_input():
    user_int = int(input('Enter and integer (0 to end and sort): '))

    if user_int != 0:
        unsorted_int.append(user_int)
        collect_input()

    if user_int == 0:
        print_list(sort_input(unsorted_int))
        

if __name__ == '__main__':
    print('Hello USER this program read your integer and sort it in order')
    collect_input()