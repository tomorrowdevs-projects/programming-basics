def numbers_in_english() -> dict:
    '''
    return a dictionary that maps english words for number between 1 and 19 and tens (20,30,40 ecc.)
    '''

    dictionary = {
        0:"zero",
        1:"one",
        2:"two",
        3:"three",
        4:"four",
        5:"five",
        6:"six",
        7:"seven",
        8:"eight",
        9:"nine",
        10:"ten",
        11:"eleven",
        12:"twelve",
        13:"thirteen",
        14:"fourteen",
        15:"fifteen",
        16:"sixteen",
        17:"seventeen",
        18:"eighteen",
        19:"nineteen",
        20:"twenty",
        30:"thirty",
        40:"fourty",
        50:"fifty",
        60:"sixty",
        70:"seventy",
        80:"eighty",
        90:"ninety"
       
            }
    
    return dictionary

english_number=""
english_number_alphabete = numbers_in_english()

while True:
    num = int(input("Insert a number: "))
    if num >= 0 and num <= 999:
        break
    else:
        print("Insert a number between 0 and 999")


if num == 0:
    english_number= english_number_alphabete[num]
else:
    while num > 0:
        if num // 100 > 0:
            key = num // 100
            english_number += english_number_alphabete[key]+" hundred "
            num = num % 100
        elif num // 10 > 0:
            if num > 19:
                key = num // 10
                num = num % 10
                if num == 0:
                    english_number += english_number_alphabete[key*10]
                else:
                    english_number += english_number_alphabete[key*10]+" "
            else:
                english_number += english_number_alphabete[num]
                num = 0
        else:
            english_number += english_number_alphabete[num]
            num = num % 1

print(english_number)

    