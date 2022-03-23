import os, re


#   creiamo due listeuna per confronatre le singole parole,
#   l'altra per inserire le parole ripetute

box = []
rep_words = []
count = 0
try:
 with open('prova.txt','r') as f:
  for line in f:
    count += 1
    out = re.sub(r'[^\w\s]','',line)
    sep = out.lower().split()
    for a in sep :
         
        if a not in box:
              box.append(a)
          
        elif a  == box[-1]:
             rep_words.append(a)
             print(f'You have repeatued the word : {a} in line {count}')
except FileNotFoundError as err:
    print(err)              

