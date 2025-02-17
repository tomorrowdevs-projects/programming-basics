#Write a program that computes and displays the Scrabble score for a word.

#create dictionary and bring the input from the user
#with a cicle bring a single letter from input (they are the keys) and then bring the value
#put the values ina list and sum those for the result 

def scarabble(word):
    #capitalize the input for read in dictionary
    new_word=word.upper()
    score=[]
    dict_points={tuple(["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"]): 1, tuple(["D", "G"]): 2, tuple(["B", "C", "M", "P"]): 3,
                tuple(["F", "H", "V", "W", "Y"]): 4, tuple(["K"]): 5, tuple(["J", "X"]): 8, tuple(["Q", "Z"]): 10}
    #bring a single letter from input
    for x in new_word:
        for key in dict_points:
            if x in key:
                #bring the value and put them in score
                score.append(dict_points[key])
    #sum values for the result
    return sum(score)
    
word=input("Insert a word to compute your score: ")
print(scarabble(word))