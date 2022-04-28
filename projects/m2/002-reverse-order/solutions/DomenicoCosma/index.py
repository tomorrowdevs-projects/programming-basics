
#Function that sorts a list of integers numbers in a reverse order

try:
 def numbers_sort():
    num_list = []
    while True:
        num_request = int(input('Enter an integer number...(Enter 0 to quit)'))
        if num_request == 0:
            break
        else:
            num_list.append(num_request)
    sort_list = sorted(num_list, reverse=True)                         #function to reverse the sort of the list
    for n in sort_list:
        print(n)



 numbers_sort()
except:
    print('You have to enter a integer number')