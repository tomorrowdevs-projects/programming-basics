values = input('Enter values to calculate the average. So, enter 0 and push enter : ')

list_values = values.split()
list_values = list(map(int, list_values))

first = list_values[:1]
if first == [0]:
    print('ERROR: Enter values to calculate the average!')
else:
    list_values.remove(0)
    mean = sum(list_values)/len(list_values)
    print(mean)


