def remove_outliers(list_name,n):
    if n <= 0:
        return("Parameter must be higher than 0.")
    list_name.sort()
    list_name_removed = list_name [:]
    del list_name_removed[:n]
    del list_name_removed[-n:]
    return(list_name_removed)

def main():
    list_value = []
    counter = 0
    value = input("Enter a value (enter something different than integer to quit): ")
    while value.isdigit() == True:
        list_value.append(int(value))
        counter += 1
        value = input("Enter a value (enter something different than integer to quit): ")

    if counter < 4:
        print("You must enter at least 4 values.")
    else:
        print(remove_outliers(list_value,2))
        print(list_value)

if __name__ == "__main__":
    main()