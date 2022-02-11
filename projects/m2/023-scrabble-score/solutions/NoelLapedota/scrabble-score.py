scrabble_score = {1:["a", "e", "i", "l", "n", "o", "r", "s", "t", "u"], 2:["d", "g"],
 3:["b", "c", "m", "p"], 4:["f", "h", "v", "w", "y"],
  5:["k"], 8:["j", "x"], 10:["q", "z"]}

q = input('Enter the word please\n')
score = 0
for k in q:
    for v, j in scrabble_score.items():
        if k in j:
            score += v
print(score)            
