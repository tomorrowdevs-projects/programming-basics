def remove_outliers (list_of_values, n):
    """takes a list of values and a non-negative integer n,
    returns a new copy of the list with the n largest elements and the n smallest elements removed."""
    if len(list_of_values) >= 4:
        if n.isnumeric():
            n = int(n)
            new_list = list_of_values [:]
            new_list.sort()
            del new_list[:n]
            del new_list[-n:]
            if len(new_list) == 0:
                return "Empty list"
            return new_list
        else:
            print("You must enter a non-negative integer as a parameter!")
    else:
        print("You must enter at least 4 values in the list!")


if __name__ == "__main__":
    entered_numbers = []
    number = input("Enter a number (f to finish): ").lower()

    while number != "f":
        if float(number).is_integer(): 
            entered_numbers.append(int(number))
        else: 
            entered_numbers.append(float(number))
        number = input("Enter a number (f to finish): ").lower()

    if remove_outliers(entered_numbers, "2"):
        print("List with the outliers removed:", remove_outliers(entered_numbers, "2"))
        print("Original list:", entered_numbers)