def remove(l, n):
    l.sort()
    new_list = l[n:-n]
    return new_list


if __name__ == '__main__':
    list = []
    outliers = int(input("Enter a non-negative number: "))
    number = input("Enter a number of your list: ")
    while number != "":
        list.append(float(number))
        number = input("Enter another number of your list: ")
    if len(list) <= 2 * outliers:
        print("Error, your list must be longer")
        for i in range(0, 2* outliers - len(list) + 1):
            number = float(input("Enter another number of your list: "))
            list.append(number)

    new_list = sorted(list)
    print(f"Original list: {list}")
    print(f"List with the outliers removed: {remove(list, outliers)}")