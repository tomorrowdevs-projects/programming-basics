
# Write a program that computes and displays the Scrabble score for a word. 

# Create a dictionary that maps from letters to point values.
# Then use the dictionary to compute the score.

letters_to_point = {
    'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2,
    'H': 4, 'I': 1, 'J': 8, 'K': 5, 'L': 1, 'M': 3, 'N': 1,
    'O': 1, 'P': 3, 'Q': 10, 'R': 1, 'S':1, 'T': 1, 'U': 1,
    'V': 4, 'W': 4, 'X': 8, 'Y': 4, 'Z': 10
}

word = input('Insert a word: ')
score = 0
word = word.upper()

for letter in word:
    score += letters_to_point[letter]

print(score)