def hex(hex_num):
    if len(hex_num) == 1:
        if 48 <= ord(hex_num) <= 57:
            return hex_num
        if 65 <= ord(hex_num.upper()) <= 70:
            return ord(hex_num.upper()) - 55
        else:
            return False

def int_hex(int_num):
    if 0 <= int(int_num) <= 15:
        if int(int_num) <= 9:
            return int_num
        else:
            return chr(int(int_num) + 55)
    else:
        return False

def main():
    hex_num = input("Enter a hexadecimal number: ")
    print (hex(hex_num)) if hex(hex_num) else print("Enter a valid number")
    int_num = input("Enter a decimal number:")
    print (int_hex(int_num)) if int_hex(int_num) else print("Enter a valid number")

if __name__ in "__main__":
    main()