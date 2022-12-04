def scrabble_score(string):
    scrabble_points = {("A","E","I","L","N","O","R","S","T","U"):1, ("D","G"):2, ("B","C","M","P"):3, 
    ("F","H","V","W","Y"):4, ("K",):5, ("J","X"):8, ("Q","Z"):10}
    score = 0
    for letter in string:
        for k in scrabble_points:
            if letter.upper() in k: 
                score += scrabble_points[k]
    return score

def main():
    word = input("Enter a word to calculate the scrabble score: ")
    print ("Scrabble score:", scrabble_score(word))

if __name__ == "__main__":
    main()