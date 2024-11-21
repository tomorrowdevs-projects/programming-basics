def remove_outliers(list, n):

    copy = list.copy()
    copy.reverse()

    for i in range(n):
        copy.remove(max(copy))
        copy.remove(min(copy))
    return copy

def main():

    list_u = []
    num_list = int(input("Number: "))

    while num_list != 0:
        list_u.append(num_list)
        num_list = int(input("Number: "))
    
    if len(list_u) >= 4:
        print(f"Your list: {remove_outliers(list_u, 1)}")
        print(F"Original: {num_list}")

if __name__ == '__main__':
    main()
            