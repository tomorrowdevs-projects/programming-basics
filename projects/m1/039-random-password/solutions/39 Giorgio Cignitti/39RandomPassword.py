
#Write a function that generates a random password. The password should have a random length of between 7 and 10 characters. Each character should be randomly selected from positions 33 to 126 in the ASCII table. Your function will not take any parameters. It will return the randomly generated password as its only result. Display the randomly generated password in your file’s main program.

import random

def randmPasswordGen():
  string=""
  #it generates a random number ranging from 7 and 10 determinig passeword lenght
  lenght=random.randint(7, 10)
  
  #by selecting range(lenght), for loop will loop until it reaches the final lenght of our string
  for x in range(lenght):
    #at each iteration the loop will generate one random ascii symbol to be inserted in string afterwards
    randomCh=chr(random.randint(33, 126)) 
    string=string+randomCh
  return string

print(randmPasswordGen())