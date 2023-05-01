def hex2int(number):
    conversion_h2i = {"0":"0", "1":"1", "2":"2", "3":"3", "4":"4", "5":"5", "6":"6", "7":"7", "8":"8", "9":"9",
                  "A":"10", "B":"11", "C":"12", "D":"13", "E":"14", "F":"15"}
    number = number.upper()
    if number in conversion_h2i:
        return conversion_h2i[number]
    return "not possible"


def int2hex(number):
    conversion_i2h = {"0":"0", "1":"1", "2":"2", "3":"3", "4":"4", "5":"5", "6":"6", "7":"7", "8":"8", "9":"9",
                      "10":"A", "11":"B", "12":"C", "13":"D", "14":"E", "15":"F"}
    if number in conversion_i2h:
        return conversion_i2h[number]
    return "not possible"


if __name__ == '__main__':
    n = input("Enter a hexadecimal base digit: ")
    print(f"The conversion to a decimal base is {hex2int(n)}")

    m = input("Enter a decimal base number: ")
    print(f"The conversion to an hexadecimal base digit is {int2hex(m)}")