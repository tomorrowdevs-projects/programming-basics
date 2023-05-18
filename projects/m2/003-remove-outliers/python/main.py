def remove_outliers(list_value, n):
    if len(list_value) < 4:
        raise ValueError("List must contain at least 4 values.")
    list_value_2 = list_value.copy()
    count = 0
    while count < n:
        list_value_2.remove(max(list_value_2))
        list_value_2.remove(min(list_value_2))
        count += 1
    return list_value_2



stop_program = False
list_value = []
while not stop_program:
    n = int(input('Enter a number: '))
    if n != 0:
        list_value.append(n)
    else:
        print("You've stopped the program")
        stop_program = True

new_lst = remove_outliers(list_value, 2)
print("List with outliers removed:", new_lst)
print("Original list:", list_value)