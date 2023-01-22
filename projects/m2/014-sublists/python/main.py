def is_sublist(larger_list, smaller_list):
    larger_string_list = []
    smaller_string_list = []
    
    for el in larger_list:
        larger_string_list.append(el)
    larger_string = ''.join(larger_string_list)

    for el in smaller_list:
        smaller_string_list.append(el)
    smaller_string = ''.join(smaller_string_list)
        
    return smaller_string in larger_string
        

if __name__ == '__main__':
    print('Hello USER, this script will return "True" if a list is a sublist of another list')

    larger_input = input('Type the elements of the larger list separated by a space: ')
    larger_list = larger_input.split()

    smaller_input = input('Type the elements of the smaller list separated by a space: ')
    smaller_list = smaller_input.split()

    print(is_sublist(larger_list, smaller_list))