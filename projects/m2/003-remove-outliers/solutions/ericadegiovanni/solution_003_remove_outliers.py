
def remove_outliers(list, n):

    # recieve a list
    # recieve n = n largest elements and the n smallest elements to remove.
    # The order of the elements in the returned list does not have to match the order of the elements in the original list.
    # return a new copy of the list

    list_copy = list.copy()
    list_copy.reverse()
    
    for i in range(n):
        list_copy.remove(max(list_copy))
        list_copy.remove(min(list_copy))
    return list_copy

# Write a main program that demonstrates your function
def main():    

    # read a list of numbers from the user
    # remove the two largest and two smallest values
    entred_numbers_list = []
    print('Insert 4 or more numbers (press 0 to quit): ')
    entred_number = int(input('Number: '))

    while entred_number != 0:
        entred_numbers_list.append(entred_number)
        entred_number = int(input('Number: '))

    # Display the list with the outliers removed, followed by the original list.
    if len(entred_numbers_list) >= 4:
        print(f'List with the outliers removed: {remove_outliers(entred_numbers_list, 2)}.')
        print(f'Original list: {entred_numbers_list}.')

    # generate an error message if the user enters less than 4 values.
    else:
        print('Insert at least 4 integers.')

if __name__ == '__main__':
    main()
