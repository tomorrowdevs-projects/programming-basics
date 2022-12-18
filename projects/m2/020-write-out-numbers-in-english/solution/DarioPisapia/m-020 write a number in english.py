num_to_word = {
    1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six",
    7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven",
    12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fiftteen",
    16: "sisteen", 17: "seventeen", 18: "eighteen", 19: "nineteen",
    20: "twenty", 30: "thirty", 40: "fourty", 50: "fifty", 60: "sixty",
    70: "seventy", 80: "eighty", 90: "ninety"
}

def num_converter(number):
    if len(number) < 3:
        if 1 < int(number) < 20:
            print(num_to_word[int(number)])
        else:
            number = int(number)
            print(num_to_word[(number//10)*10], num_to_word[number%10])
    else:
        if number[0] == "1":
            number = int(number)
            print(f"{num_to_word[number//100]} hundred {num_to_word[((number%100)//10)*10]} {num_to_word[(number%100)%10]}")
        else:
            number = int(number)
            print(f"{num_to_word[number//100]} hundreds {num_to_word[((number%100)//10)*10]} {num_to_word[(number%100)%10]}")


if __name__ == "__main__":
    number = input("Digit the number to convert: ")
    num_converter(number)
