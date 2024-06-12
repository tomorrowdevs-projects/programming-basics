import random
def english_numbers(x):
    one_digit = {'0':'', '1':'one', '2':'two', '3':'three', '4':'four',
    '5':'five', '6':'six', '7':'seven', '8':'eight', '9':'nine'}
    two_digits_under_20 = {'10':'ten', '11':'eleven' ,'12':'twelve', '13':'thirtheen', '14':'fourteen',
    '15':'fifteen', '16':'sixteen', '17':'seventeen', '18':'eighteen', '19':'nineteen'}
    two_digits = {'2':'twenty', '3':'thirty','4':'forty', '5':'fifty', '6':'sixty', '7':'seventy', '8':'eighty', '9':'ninety'}
    three_digits = {'1':'One hundred', '2':'Two hundred', '3':'Three hundred', '4':'Four hundred',
    '5':'Five hundred', '6':'Six hundred', '7':'Seven hundred', '8':'Eight hundred','9':'Nine hundred'}

    result = ''
    #check how long is the number
    if len(x) == 3:
        result += three_digits[x[0]] + ' '
        #if there is no further number bigger than 0, just return result
        if x[1:3] == '00':
            return result
        if x[1] == '0':
            result += one_digit[x[2]]
        elif x[1:3] in two_digits_under_20:
            result += two_digits_under_20[x[1:3]] + ' '
        else:
            result += two_digits[x[1]] + ' '
            result += one_digit[x[2]]
    elif len(x) == 2:
        if x[0:2] in two_digits_under_20:
            result += two_digits_under_20[x]
        else:
            result += two_digits[x[0]] + ' '
            result += one_digit[x[1]]
    else:
        result += one_digit[x]
    return result

if __name__ == "__main__":
    num = random.randint(0,999)
    print(num)
    print(english_numbers(str(num)))