
#program that computes and displays the Scrabble score for a word.

word_point = {1: ['A', 'E', 'I', 'L', 'N', 'O', 'R', 'S', 'T', 'U'],
              2: ['D', 'G'],
              3: ['B', 'C', 'M', 'P'],
              4: ['F', 'H', 'V', 'W', 'Y'],
              5:'K',
              8: ['J', 'X'],
              10: ['Q', 'Z']}



text = list(input('Enter a word').upper())
count = 0
for x in text:
    for k,v in word_point.items():
        if x in v:                                  #if the letter is in the values list we want just to count the key of the dictionary, in this case the keys are the points
            count += k
print(count)