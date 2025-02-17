def write_numbers(number):
    """Returns a string containing the English words for that number."""
    if len(number) > 3 or not number.isnumeric():
        return "Error! You must enter an integer between 0 and 999."

    units = {"0":"zero", "1":"one", "2":"two", "3":"three", "4":"four", "5":"five", "6":"six", "7":"seven", "8":"eight", "9":"nine"}
    from_ten_to_nineteen = {"10":"ten", "11":"eleven", "12":"twelve", "13":"thirteen", "14":"fourteen", "15":"fifteen", "16":"sixteen", "17":"seventeen", "18":"eighteen", "19":"nineteen"}
    tens = {"2":"twenty", "3":"thirty", "4":"forty", "5":"fifty", "6":"sixty", "7":"seventy", "8":"eighty", "9":"ninety"}
    number_in_words = ""

    if len(number) == 3 and number[0] != "0":
        number_in_words = units[number[0]] + " hundred "
    if len(number) > 1:
        if int(number[-2:]) > 19:
            number_in_words += tens[number[-2]] + " " 
            if int(number[-1]) != 0:
                number_in_words += units[number[-1]]
        elif 10 <= int(number[-2:]) <= 19:
            number_in_words += from_ten_to_nineteen[number[-2:]]
    else: 
        number_in_words = units[number]

    return number_in_words


if __name__ == "__main__":
    user_number = input("Enter a number (from 0 to 999): ")
    print(user_number, "=", write_numbers(user_number))