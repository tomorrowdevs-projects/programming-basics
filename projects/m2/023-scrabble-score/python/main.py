scrabble_score = {}

alphabet = "AEILNORSTUDGBCMPFHVWYKJXQZ"

scrabble_score[1] = list(alphabet[0:10])
scrabble_score[2] = list(alphabet[10:12])
scrabble_score[3] = list(alphabet[12:16])
scrabble_score[4] = list(alphabet[16:21])
scrabble_score[5] = list(alphabet[21:22])
scrabble_score[8] = list(alphabet[22:24])
scrabble_score[10] = list(alphabet[24:26])

word = input("Insert a word ")

total_points = 0

for c in word:
    c = c.capitalize()
    key = 0
    for i in scrabble_score:
        if c in scrabble_score[i]:
            key = i
    total_points += key

print("Scrabble total points: {}".format(total_points))