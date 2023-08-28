def scrabble_score(word):
    letters_score ={
        1: ['A', 'E', 'I', 'L', 'N', 'O', 'R', 'S', 'T', 'U'],
        2: ['D', 'G'],
        3: ['B', 'C', 'M', 'P'],
        4: ['F', 'H', 'V', 'W', 'Y'],
        5: ['K'],
        8: ['J', 'X'],
        10: ['Q', 'Z']
    }

    word = word.upper()
    word_score = 0
    for letter in word:
        for key in letters_score:
            if letter in letters_score[key]:
                word_score += key

    return word_score

def main():
    word = input('Enter word to know it score: ')
    print(f'Total score: {scrabble_score(word)}')

if __name__ == '__main__':
    main()
