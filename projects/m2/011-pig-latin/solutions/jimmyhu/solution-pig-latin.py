def pigger(str):
    vowel = ['a','e','i','o','u']
    splitted = str.split(' ')
    pigged = []
    for word in splitted:
        if word[0] in vowel:
            pigged.append(f"{word}way")
        else: 
            for letters in word:
                if letters in vowel or letters == 'y':
                    pig = f"{word[word.index(letters):]}{word[:word.index(letters)]}ay"
                    pigged.append(pig)
                    break
    return ' '.join(pigged)
def main():
    print(pigger('computer office algorithm think'))
if __name__ == '__main__':
    main()