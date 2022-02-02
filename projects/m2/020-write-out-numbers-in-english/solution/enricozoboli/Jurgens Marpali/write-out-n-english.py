def num_to_eng(num):

    one_nineteen = {
        0 :'zero',
        1:'one',
        2:'two',
        3:'three',
        4:'four',
        5:'five',
        6:'six',
        7:'seven',
        8:'eight',
        9:'nine',
        10:'ten',
        11:'eleven',
        12:'twelve',
        13:'thirteen',
        14:'fourteen',
        15:'fifteen',
        16:'sixteen',
        17:'seventeen',
        18:'eighteen',
        19:'nineteen',        
    }

    dozen = {
        2:'twenty',
        3:'thirty',
        4:'forty',
        5:'fifty',
        6:'sixty',
        7:'seventy',
        8:'eighty',
        9:'ninety',
    }

    output = ''
    if num <= 19:
        output = one_nineteen[num]
    elif 19 < num < 100:
        num = str(num)
        output = dozen[int(num[0])] + ' ' + one_nineteen[int(num[1])]
    else:
        num = str(num)
        output = one_nineteen[int(num[0])] + ' hundred '
        num = int(num[1:])
        if num <=19:
            output += 'and ' + one_nineteen[num]
        else:
            num = str(num)
            output += 'and ' + dozen[int(num[0])] + ' ' + one_nineteen[int(num[1])]
    
    return output

def main():

    user = int(input("Insert a number to convert: "))
    print(num_to_eng(user))

if __name__ == "__main__":
    main()