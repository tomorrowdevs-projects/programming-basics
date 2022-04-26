
#function that requires at least 4 values and remove the two max and the two min values from a list of values

try:
 num_list = []

 def max_min_val(value):
    while True:
        request = int(input('Enter a list of positive numbers with at least 4 values...'))
        if request == 0:
            break
        else:
            num_list.append(request)
    if len(num_list) < 4:
        print('You have to enter at least 4 values integer numbers')
    else:
        list_sort = sorted(num_list)
        list_sort = list_sort[2:]                                         #removes the first two values from the list already sorted
        list_sort = list_sort[:-2]                                        # and the last two values
        print('Your list is:')
        for x in list_sort:                                               #prints the values line by line
            print(x)
        print('Your list was:')
        for n in num_list:
            print(n)




 max_min_val(num_list)
except:
    print('You have to enter a integer number')