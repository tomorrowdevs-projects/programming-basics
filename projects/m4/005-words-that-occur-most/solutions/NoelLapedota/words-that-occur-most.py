"""
Write a program that displays the word (or words) that occur most frequently in a file.
Each line will need to be split into words, and any leading or trailing punctuation marks will need to be removed from each word. 
Your program should also ignore capitalization when counting how many times each word occurs. 
"""
import sys 
list={}
if len(sys.argv) < 1:
   print('The command line argument is omitted.')   
else:
 try:
   with open(sys.argv[1],'r') as f:
    for word in f.read():
        for letter in word:
            letter = letter.lower()
            if letter.isalpha()==True and letter not in list:
                list[letter] = 1
            elif letter in list:
                list[letter] += 1
            sortedDict = sorted(list.items(), key=lambda x: x[1], reverse=True)
   for x , y in sortedDict:   
     print(f'The Letter{x} is present in the file {y} times \n')
 except FileNotFoundError:
        print('Error')
        
   

