def convert_base_ten(num, base_from):
    num_base_ten = 0
    reversed_num = num[::-1]
    for i in range(0, len(num)):
        if 48 <= ord(reversed_num[i]) <= 57:
            num_base_ten += (
                int(reversed_num[i]) * (int(base_from) ** i)
                )
        if 65 <= ord(reversed_num[i]) <= 70 or(
            97 <= ord(reversed_num[i]) <= 102
            ):
            num_base_ten += (
                (ord(reversed_num[i].upper())-55) *
                (int(base_from) ** i)
                )
    return num_base_ten


def convert_arbitrary_base(num , base_from, base_to):
    num_base_arb = ""
    num_base_ten = convert_base_ten(num, base_from)
    while True:
        if num_base_ten< int(base_to):
            num_base_arb += str(num_base_ten % int(base_to))
            break
        else:
            remainder  = num_base_ten % int(base_to)
            if remainder <= 9:
                num_base_arb += str(remainder)
                num_base_ten //= int(base_to)
            else:
                num_base_arb += chr(remainder + 55)
                num_base_ten //= int(base_to)
    return num_base_arb[::-1]


if __name__ == "__main__":
    print("Please enter a number paying attention to his base!")
    num = input("Number: ")
    print("(The number's base must be greater the 1, higher then the number's "
    "digits and lesser then 17.)")
    base_from = input("Number's base: ")
    print("(Base to convert must be greater then 1 and lesser then 17).")
    base_to = input("Base to convert: ")
    print(f"Your number in base 10: {convert_base_ten(num, base_from)}")
    print(f"Your number in base {base_to}:"
    f" {convert_arbitrary_base(num, base_from, base_to)}")
