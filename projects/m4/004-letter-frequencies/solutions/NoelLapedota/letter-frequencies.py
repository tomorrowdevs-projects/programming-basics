from curses.ascii import isalpha
import sys 
if len(sys.argv) < 1:
    print('The command line argument is omitted.')    
list={}
count = 0
try:

  with open(sys.argv[1], 'r')as f:
    for word in  f.red():
        for  letter in word:
            letter = letter.lower()
            if letter not in list and letter.isalpha():
                list['letter'] = 1
                count =+ 1
            else:
                list['letter'] = +1
                count =+ 1
    for x , y in list.items():   
     print(f'The Letter{x} is present in the file {y} times , and Frequency is : {round((y/count)*100, 2)}%")\n The text has {count} words ')

except FileNotFoundError:
        print('Error')
   

