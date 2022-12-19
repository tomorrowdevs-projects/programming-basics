
# program that reads two strings from the user, determines whether or not they are anagrams, and reports the resul

def histrogram(string):                                          #function to count how many time a letter is in the word
    d = dict()
    for lett in string:
        if lett not in d:
            d[lett] = 1
        else:
            d[lett] += 1
    return d



print('Enter two words to know if they are anagrams of each other')
word1= histrogram(input('Enter the first word: ').lower())
word2 = histrogram(input('Enter the second word: ').lower())
word1_sort = sorted(word1.items())                                  #func to sort the dictionary
word2_sort = sorted(word2.items())

if word1_sort == word2_sort:
    print('Your words are anagrams')
else:
    print('You words are not anagrams')