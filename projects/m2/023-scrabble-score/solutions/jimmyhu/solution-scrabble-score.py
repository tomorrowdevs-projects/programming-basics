def score(word):
    values = {
        '1':['A', 'E', 'I', 'L', 'N', 'O', 'R', 'S', 'T', 'U'],
        '2':['D', 'G'],
        '3':['B', 'C', 'M', 'P'],
        '4':['F', 'H', 'V', 'W', 'Y'],
        '5':['K'],
        '8':['J', 'X'],
        '10':['Q','Z'],
    }
    points = 0
    for letter in word:
        for val in values:
            if letter in values[val]:
                points += int(val)
    return points
def main():
    wrd = input('Enter the word: ')
    print(f"This word score is: {score(wrd.upper())}")
if __name__ == '__main__':
    main()