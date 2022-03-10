import sys
import re 
if len(sys.argv) < 1:
    print('The command line argument is omitted.')    
dict={}
count = 0
try:

  with open(sys.argv[1], 'r')as f:
    for line  in  f: 
         re.sub(r'[^\w\s]','',line)
         words = line.lstrip().rstrip().split()  
         for word in words:
           if  word.isalpha():
             if word not in dict :
                  dict[word] = 1
                  count += 1
             else:
                dict[word] +=1      
                count += 1
                   
    for x , y in dict.items():
      x= x.upper()   
      print(f'The word {x} is present in the file {y} times , and Frequency is : {round((y/count)*100, 2)}%")\n') 
  print(f'The text has {count} words ')
except FileNotFoundError:
        print('Error')
   
