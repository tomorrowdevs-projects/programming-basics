def format_list(list_of_items):
    if len(list_of_items) == 0:
        formatted_list = "Empty list."
    elif len(list_of_items) == 1:
        formatted_list = list_of_items[0]
    else:
        formatted_list = ""
        for items in list_of_items:
            if list_of_items.index(items) != len(list_of_items) - 1:
                formatted_list += items + ", "
            else: formatted_list += "and " + items
    return(formatted_list)

def main():
    item = input("Insert an item in the list (blank to quit): ")
    inserted_items = []
    while item != " ":
        inserted_items.append(item)
        item = input("Insert an item in the list (blank to quit): ")
    print(format_list(inserted_items))

if __name__ == "__main__":
    main() 