def format_list(list_of_items):
    if len(list_of_items) == 0:
        formatted_list = "Empty list."
    elif len(list_of_items) == 1:
        formatted_list = list_of_items[0]
    elif len(list_of_items) == 2:
        formatted_list = "{} and {}".format(list_of_items[0], list_of_items[1])
    else:
        formatted_list = ""
        for items in list_of_items[:-2]:
            formatted_list += items + ", "
        formatted_list = "{}{} and {}".format(formatted_list, list_of_items[-2], list_of_items[-1])
    return formatted_list

def main():
    item = input("Insert an item in the list (blank to quit): ")
    inserted_items = []
    while item.strip() != "":
        inserted_items.append(item)
        item = input("Insert an item in the list (blank to quit): ")
    print(format_list(inserted_items))

if __name__ == "__main__":
    main() 