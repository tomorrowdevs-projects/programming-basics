def formatting(list_string):
    if len(list_string) == 1:  #if only one item in the list
        print(*list_string)

    elif len(list_string) == 2:  #if two items in the list
        new_list = []
        new_list.append(list_string[0] + " and " + list_string[1])
        print(*new_list)

    elif len(list_string) > 2:  #if three or more items in the list
        new_list = []
        for index in list_string[0:-2]:
            new_list.append(index + ",")
        new_list.append(list_string[-2] + " and " + list_string[-1])
        print(*new_list)

def main():
    user_list = []
    user_item = input("Enter an item (blank to finish): ")
    while user_item != "":
        user_list.append(user_item)
        user_item = input("Enter an item (blank to finish): ")
    if len(user_list) > 0:
        formatting(user_list)
    else:
        print("No items")

if __name__ == "__main__":
    main()

    
