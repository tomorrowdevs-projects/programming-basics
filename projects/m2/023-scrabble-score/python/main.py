def scrabble_score(string):
    string = string.upper()
    scrabble_points = {1: ("A","E","I","L","N","O","R","S","T","U"), 2: ("D","G"), 3: ("B","C","M","P"), 4: ("F","H","V","W","Y"), 5: ("K",), 8: ("J","X"), 10: ("Q","Z")} 
    score = 0
    for letter in string:
        for key in scrabble_points.keys():
            if letter in scrabble_points[key]:
                score += key
    return score

def main():
    word = input("Enter a word to calculate the scrabble score: ")
    print("Scrabble score:", scrabble_score(word))

if __name__ == "__main__":
    main()