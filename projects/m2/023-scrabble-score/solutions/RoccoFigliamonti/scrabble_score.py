"""
In the game of Scrabble, each letter has points associated with it. The total score of a word is the sum of the scores of its letters.

|Points| Letters|
|------|---------|
|1| A, E, I, L, N, O, R, S, T, U|
|2| D, G|
|3| B, C, M, P|
|4| F, H, V, W, Y|
|5|K|
|8| J, X|
|10| Q, Z|

Write a program that computes and displays the Scrabble score for a word. """


word = "elephant".upper()
letter_points = {1: ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"],
          2: ["D","G"],
          3: ["B", "C", "M", "P"],
          4: ["F", "H", "V", "W", "Y"],
          5: ["K"],
          8: ["J","X"],
          10: ["Q", "Z"]}

total_point = []
for ch in word:
    for k in letter_points.keys():
        if ch in letter_points[k]:
            total_point.append(k)
print(total_point)
print(sum(total_point))