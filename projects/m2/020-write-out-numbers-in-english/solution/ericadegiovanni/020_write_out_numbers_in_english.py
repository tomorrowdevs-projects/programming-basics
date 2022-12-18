def num_2english_word(num):

    # create a function that takes an integer between 0 and 999 as its only parameter
    # returns a string containing the English words for that number. 
    
    till_nineteen = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }

    dozens = {
        2 : 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }
    
    output = ''
    if num <= 19:
        output = till_nineteen[num]
    elif 19 < num < 100:
        num = str(num)
        output = dozens[int(num[0])] +' '+ till_nineteen[int(num[1])]
    else:
        num = str(num)
        output = till_nineteen[int(num[0])] + ' hundred '
        num = int(num[1:])
        if num <= 19:
            output += 'and ' + till_nineteen[num]
        else:
            num = str(num)
            output += 'and ' + dozens[int(num[0])] +' '+ till_nineteen[int(num[1])]
    
    return output



number = int(input('Insert a number: '))
print(num_2english_word(number))