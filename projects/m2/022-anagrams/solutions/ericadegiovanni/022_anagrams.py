from two_dices_simulation import calc_occurrences

def main():
    
    #Create a program that reads two strings from the user,
    #determines whether or not they are anagrams, and reports the result.

    word1 = input('Insert the firts word: ')
    word2 = input('insert the second word: ')
    
    #create a dict counting the times each letter (key) occurs (value) in the string
    calc_word1 = calc_occurrences(word1)
    calc_word2 = calc_occurrences(word2)

    if calc_word1 == calc_word2:
        print(f'"{word1}" and "{word2}" are anagrams.')
    else:
        print(f'"{word1}" and "{word2}" aren\'t anagrams.')

if __name__ == "__main__":
    main()