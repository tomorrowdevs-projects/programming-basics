def remove_outliners():
    #empty list that contains values from user
    original_list = []
    while True:
        #in loop, ask input from user and append the input in list
        new_int = int(input('Enter an integer (0 to stop): '))
        original_list.append(new_int)
        #break in case these 2 conditions are encountered
        if new_int < 0:
            print('Error: integer should be bigger than 0')
            break
        elif new_int == 0:
            break
    #outside loop, remove the 0, clone list, sort new list in ascending order
    original_list.remove(0)
    new_list = original_list.copy()
    new_list.sort()
    #if total of items are less than 4, print error message, otherwise remove 2 biggest and 2 smallest values from list
    if len(original_list) < 4:
        print('Error: enter at least 4 values')
    else:
        del new_list [0:2]
        del new_list [-2:]
    return new_list, original_list

print(remove_outliners())