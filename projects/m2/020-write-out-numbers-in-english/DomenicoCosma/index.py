
#program  that takes an integer between 0 and 999 as its only parameter, and returns a string containing the English words for that number.

numbers2text = {
    0: '', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six',
    7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve',
    13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen',
    17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
    20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty',
    70: 'seventy', 80: 'eighty', 90: 'ninety'}

def convert_num(num):
    if num == 0:
        return 'zero'
    elif num < 21:                                                   #if the num entered by the user if smaller then 21 the function will return the corresponding value
        return numbers2text[num]
    elif num < 100:
        return numbers2text[num//10*10] + ' ' + numbers2text[num % 10]      #formula to get the value in the dictionary'numbers2text'. exapmle: if we type 56 to get 50:'fifty' we need to divide the number and multiplay it per 10 and the second digit we need the modulus between the number enetered by the user and 10
    elif num < 1000:
        return numbers2text[num // 100] + ' ' + 'hundred ' + numbers2text[num % 100 // 10 * 10] + ' ' + numbers2text[num % 10]
               #to get the 1 digit number entered by the user divide 100, to get the second num modulus 100 divide 10 multiplay 10, the third is the same like line 18  num moudulus 10


print(convert_num(int(input('Enter a number between 0 and 999 to convert it in a string... '))))