#A Bingo card consists of 5 columns of 5 numbers which are labelled with the letters B, I, N, G and O.

#There are 15 numbers that can appear under each letter.

#In particular, the numbers that can appear under the B range from 1 to 15, the numbers that can appear under the I range from 16 to 30, the numbers that can appear under the N range from 31 to 45, and so on.

#Write a function that creates a random Bingo card and stores it in a dictionary.

#The keys will be the letters B, I, N, G and O. The values will be the lists of five numbers that appear under each letter. Write a second function that displays the Bingo card with the columns labelled appropriately.

#Use these functions to write a program that displays a random Bingo card.

#Ensure that the main program only runs when the file containing your solution has not been imported into another program.

import random

def bingoCard():
  card={
    "b":[],
    "i":[],
    "n":[],
    "g":[],
    "o":[]}
  
  for key,value in card.items():
    if(key=="b"):
      for x in range(5):
       value.append(random.randint(1,15))
    elif(key=="i"):
      for x in range(5):
       value.append(random.randint(16,30))
    elif(key=="n"):
      for x in range(5):
       value.append(random.randint(31,45))
    elif(key=="g"):
      for x in range(5):
       value.append(random.randint(46,60))
    else:
      for x in range(5):
       value.append(random.randint(61,75))
    
  for key,value in card.items():
      print(key,value)

  return card

print(bingoCard())
