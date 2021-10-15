def decimal_to_bin_rec(number, string=""):
    """
    Converts a non-negative decimal number to binary
    """

    # Base Case
    if number == 0:
        res = string + "0"
        return res[::-1]
    elif number == 1:
        res = string + "1"
        return res[::-1]

    # Recursive Case
    else:
        res = number // 2
        string += str(number % 2)
        return decimal_to_bin_rec(res, string)


def main():
    usr_input = int(input("Please enter a non-negative decimal number: \n"))
    if usr_input >= 0:
        res = decimal_to_bin_rec(usr_input)
        print(f"Your number converted in binary is: {res}")
    else:
        raise ValueError("Please enter a non-negative decimal number.")

if __name__ == "__main__":
    main()
