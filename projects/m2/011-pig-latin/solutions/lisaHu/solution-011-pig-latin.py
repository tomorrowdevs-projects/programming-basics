def pig_latin(s):
    #1st list: turn string into list
    #2nd list: create list of vowels
    #3rd list: create empty list to store result
    s = (s.lower()).split(' ')
    vowel = 'aeiou'
    result = []
    for each in s:
        #if the initial of words are in vowels, add way and append changed word in result list
        #else remove the initial, add ay and append changed word in result list
        if each[0] in vowel:
            each += 'way'
            result.append(each)
        elif each[0] not in vowel:
            each = each.replace(each[0], '')
            each += 'ay'
            result.append(each)
    return result

#get input from user and print return from function
if __name__ == '__main__':
    string = input('Enter phrase to convert in pig latin: ')
    print(*pig_latin(string), sep = ' ')