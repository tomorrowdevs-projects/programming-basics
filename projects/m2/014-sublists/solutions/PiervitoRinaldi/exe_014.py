# This exercise determines whether or not one list is a sublist of another.

def is_sublist(first_list, second_list):
    if len(second_list) > len(first_list):
        return False

    elif len(second_list) == 0:
        return True

    elif first_list == second_list:
        return True
    
    elif len(second_list) == 1:
        if second_list[0] in first_list:
            return True

    for i_one in range(len(first_list)):
        for i_two in range(len(second_list)):           # i_one and i_two are indeces
            if first_list[i_one] == second_list[i_two]: # when the loop hit the same elemnt, the program compares the lists
                if second_list == first_list[i_one : (i_one + len(second_list))]:
                    return True
                else:
                    return False
                       

                        
print(is_sublist([1, 2, 3, 4, 5, 6, 7], [3, 4, 5]))
print(is_sublist([1, 2, 3], [1, 2, 3, 4]))
print(is_sublist([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7]))
print(is_sublist([1, 2, 3, 4, 5, 6, 7], [3]))
print(is_sublist(['a', 'b', 'c', 'd'], ['a', 'c', 'd']))
print(is_sublist(['a', 'b', 'c', 'd'], []))
print(is_sublist(['egg', 'chicken', 'tomato', 'fish', 'pasta'], ['tomato', 'fish', 'pasta']))


