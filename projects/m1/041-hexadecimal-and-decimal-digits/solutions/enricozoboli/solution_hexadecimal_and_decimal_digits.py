
def hex2int(hex_num):
    hex_num = str(hex_num)
    if len(hex_num) == 1:
        if 48 <= ord(hex_num) <= 57:
            return hex_num
        if 65 <= ord(hex_num.upper()) <= 70:
            return ord(hex_num.upper()) - 55
    else:
        return False
        
def int2hex(int_num):
    if 0 <= int(int_num) <= 15:
        if int(int_num) <= 9:
            return int_num
        else:
            return chr(int(int_num)+ 55)
    else:
        return False



if __name__ == "__main__":
    hex_num = input("Enter a hexadecimal"
    " number lesser then 10 or from A to F : ")
    print(hex2int(hex_num)) if hex2int(hex_num) else print(
        "Value is incorrect")
    int_num = input("Enter a decimal number lesser then 16: ")
    print(int2hex(int_num)) if int2hex(int_num) else print(
        "Value is incorrect")
