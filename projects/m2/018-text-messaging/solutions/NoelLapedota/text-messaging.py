q = input('Write the text please\n').lower
diz = {1:["/", ".", ",", "?", "!", ":"], 2:["/", "a", "b", "c"], 3:["/", "d", "e", "f"],
       4:["/", "g", "h", "i"], 5:["/", "j", "k", "l"], 6:["/", "m", "n", "o"], 7:["/", "p", "q", "r", "s"],
       8:["/","t", "u", "v"], 9:["/","w", "x", "y", "z"], 0:["/", " "]}

for x in q:
  for k, v in diz.items():
      if x in v:
       print(k,end='')
      
 

