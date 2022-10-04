keypad = {
    '1': ['.', ',', '?', '!', ':'],
    '2': ['a','b','c'],
    '3': ['d','e','f'],
    '4': ['g','h','i'],
    '5': ['j','k','l'],
    '6': ['m','n','o'],
    '7': ['p','q,','r','s'],
    '8': ['t','u','v'],
    '9': ['w','x','y','z'],
    '0': ' '
}

phrase = input('Enter phrase to convert in numbers: ')
#create empty string variable that will store the result (string numbers)
result = ''
#for each character in phrase, check if c is in dictionary through a loop that involves every key:value so that it checks every key
for c in phrase:
    for k in keypad:
        if c in keypad[k]:
            result += k
print('Phrase converted in numbers:  ', result)