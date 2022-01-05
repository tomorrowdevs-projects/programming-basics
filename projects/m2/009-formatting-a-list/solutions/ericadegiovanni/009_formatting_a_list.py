
def formatting_list(items):

    # takes a list of strings as its only parameter.
    # return a string that contains all of the items in the list formatted (separated by commas and 'and' before the last item)

    s = ', '
    if len(items) == 1:
        formatted_string = items[0]
    elif len(items) == 2:
        formatted_string = f'{items[0]} and {items[1]}'
    else:
        formatted_string = f'{s.join(items[: -1])} and {items[-1]}.'

    print(formatted_string)

def main():

    # main program that reads several items from the user, 
    # formats them by calling your function, 
    # and then displays the result returned by the function.

    item_user = input('Isert a list element (press blank to exit): ')

    items = []
    while item_user != '':
        items.append(item_user)
        item_user = input('Isert a list element (press 0 to quit): ')
    
    if len(items) > 0:
        formatting_list(items)
    else:
        print('This is an empty list.')

if __name__ == '__main__':
    main()
    