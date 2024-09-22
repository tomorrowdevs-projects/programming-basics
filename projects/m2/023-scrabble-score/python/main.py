def scrabble(word):
    table = {
        1: ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"],
        2: ["D", "G"],
        3: ["B", "C", "M", "P"],
        4: ["F", "H", "V", "W", "Y"],
        5: ["K"],
        8: ["J", "X"],
        10: ["Q", "Z"]
    }
    word = word.upper()
    score = 0
    for char in word:
        for key in table:
            if char in table[key]:
                score += key

    return(score)

def main():
    user_word = input("Enter a word: ")
    print(("The scrabble score for this word is {}.") .format(scrabble(user_word)))

if __name__ == "__main__":
    main()



