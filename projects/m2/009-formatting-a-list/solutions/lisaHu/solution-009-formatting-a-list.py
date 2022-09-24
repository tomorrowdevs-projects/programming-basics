def formatting(list):
    #program formats list based on how many items there are
    #of
    if len(list) == 1 or list[1] == ' ':
        return list
    elif len(list) == 2 or list[2] == ' ':
        list.insert(1, ' and ')
        return list
    else:
        for i in range(0,len(list),2):
            list.insert(i+1,', ')
        list.insert(-2, ' and ')
        return list

if __name__=='__main__':
    list = []
    x = input('Enter the first word for list:  ')
    list.append(x)
    while x != ' ':
        x = input('Enter word for list (blank space to stop):  ')
        list.append(x)
    print(*formatting(list), sep = '')