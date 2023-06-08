def non_negative():
    value = int(input("Enter a value: "))
    if value >= 0:
        return value
    else:
        return non_negative()


def reverse(s):
    return s[::-1]


def conversion(value):
    remainder = str(value % 2)
    value = value // 2
    if value > 0:
        return f"{conversion(value)}"+remainder
    return remainder


number = non_negative()
binary_number = conversion(number)
print(binary_number)