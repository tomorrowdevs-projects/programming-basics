def remove_ourisders(lst):
    lst.pop(lst.index(max(lst)))
    lst.pop(lst.index(max(lst)))
    lst.pop(lst.index(min(lst)))
    lst.pop(lst.index(min(lst)))
    return lst

def main():

    numbers_1 = []
    while True:
        new_number = int(input('Enter a number: '))
        if new_number < 0:
            print('The number must be greater than 0\n')
        elif new_number == 0:
            break
        else:
            numbers_1.append(new_number)
    if len(numbers_1) < 4:
        print('Error the list must have at least 4 element!')
    else:
        print(f'Original list: {numbers_1} \nList whithout outsiders: {remove_ourisders(numbers_1)}')
        

if __name__ == '__main__':
    main()