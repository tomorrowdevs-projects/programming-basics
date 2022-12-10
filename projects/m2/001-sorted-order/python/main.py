unsorted_int = []

def sort_input(unsorted_int):
    sorted_int = sorted(unsorted_int)
    print(sorted_int)

def collect_input():
    user_int = int(input('Enter and integer (0 to end and sort): '))
    if user_int != 0:
        unsorted_int.append(user_int)
        collect_input()
    if user_int == 0:
        sort_input(unsorted_int)
        

if __name__ == '__main__':
    print('Hello USER this program read your integer and sort it in order')
    collect_input()