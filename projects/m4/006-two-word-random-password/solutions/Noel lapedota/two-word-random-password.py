#   I used a file with many adjectives in English
import sys
import random
from tkinter import END 
list=[]
if len(sys.argv) < 1:
   print('The command line argument is omitted.')  
else:
    try:
        # Characteristics of words and list creation
      with open(sys.argv[1],'r') as f:
          for word in f:
              if len(word)>= 3:
                  list.append(word.capitalize())    

        # password creation
      first = random.randint(1, len(list))
      second = random.randint(1, len(list))
      password = list[first] + list[second]
      while len(password) < 8 or len(password) > 10:
        password = list[first]+list[second]
   
      print(password)
