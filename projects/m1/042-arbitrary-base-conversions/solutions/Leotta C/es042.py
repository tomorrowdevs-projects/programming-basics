def base2int(number, base):
    length = len(number)
    conversion_h2i = {"0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8,
                      "9": 9, "A": 10, "B": 11, "C": 12, "D": 13, "E": 14, "F": 15}
    number = number.upper()
    new_number = 0
    for i in range(length):
        convert_num = conversion_h2i[number[length - (i + 1)]]
        assert convert_num < base
        new_number += convert_num * pow(base, i)
    return new_number


def int2hex(number):
    conversion_i2h = {0:"0", 1:"1", 2:"2", 3:"3", 4:"4", 5:"5", 6:"6", 7:"7", 8:"8", 9:"9",
                      10:"A", 11:"B", 12:"C", 13:"D", 14:"E", 15:"F"}
    if number in conversion_i2h:
        return conversion_i2h[number]
    return "not possible"


def int2base(number, base):
    q = number // base
    r = number % base
    if q == 0:
        return int2hex(r)
    return int2base(q, base) + int2hex(r)


def conversion(number, base1, base2):
    middle_conversion = base2int(number, base1)
    print(middle_conversion)
    return int2base(middle_conversion, base2)


if __name__ == '__main__':
    n = input("Enter a number: ")
    b1 = int(input("Enter the base of your number (it must be between 2 and 16): "))
    b2 = int(input("Enter the base you want your number to be converted (it must be between 2 and 16): "))

    if b1 not in range(2, 17) or b2 not in range(2, 17):
        print("Error")
    else:
        print(f"The number {n} in base {b1} is equal to {conversion(n,b1,b2)} in base {b2}.")