def dec_to_bin(n):
    if n == 0:
        return "0"
    elif n == 1:
        return "1"
    else:
        return dec_to_bin(n // 2) + str(n % 2) 

if __name__ == "__main__":
    user_number = input("Enter a decimal number to convert to binary: ")
    while not user_number.isnumeric():
        user_number = input("Error! Enter a positive integer: ")
    print("Converted to {} base 2.".format(dec_to_bin(int(user_number))))