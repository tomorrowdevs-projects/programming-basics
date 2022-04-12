
#function that reports a list of items( not greater then 4 items) in a str separated by comma and for the last 2 items by 'and'

def items_list(text):
    text_list = text.split()
    text_list_len = text.split(' ', len(text_list) -2)            #separate the items till the second to last items
    text_list_str = ','.join(text_list_len)                       #transform the list in a str
    text = text_list_str.replace(' ', ' and ')                    # replace the last blank by 'and'
    if len(text_list) < 5:
        print(text)
    else:
        print('You list cannot contains more then 4 items')



items_list(input('Enter a maximum 4 items list separated by blank \n'))