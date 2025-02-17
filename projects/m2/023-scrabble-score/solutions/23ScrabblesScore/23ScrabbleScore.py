#In the game of Scrabble, each letter has points associated with it. The total score of a word is the sum of the scores of its letters.More common letters are worth fewer points while less common letters are worth more points. The points associated with each letter are shown below:


#helper function to sum all the value into one array
def summa(arr):
  output=0
  for x in arr:
    output=output+x
  return output

def checkScore(string):
  score = {1:["a", "e", "i", "l", "n", "o", "r", "s", "t", "u"], 2:["d", "g"], 3:["b", "c", "m", "p"], 4:["f", "h", "v", "w", "y"], 5:["k"], 8:["j", "x"], 10:["q", "z"]}
  arr=[]
  #looping over input string
  for x in string:
    for key,value in score.items():
      #if the string char is present in the value/array...
      if(x in value):
        arr.append(key)
  return summa(arr)

def main():
  userInput=input("please insert your string: ")
  print(checkScore(userInput))

main()