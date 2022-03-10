import sys 
import re
dict={}
list=[]
if len(sys.argv) < 1:
   print('The command word argument is omitted.')   
else:
      # open the file and delete punctuation
 try:
   with open(sys.argv[1],'r') as f:
    for line in f:
       line = re.sub(r'[^\w\s]','',line)
       list_word =line.lstrip().rstrip().split()
       for a in list_word:
          list.append(a)
    # with list we create a single list, otherwise it will unpack the text line   
       for word in list:
        word = word.lower()
        print(word)
        if word not in dict and word.isalpha() == True :
              dict[word] = 1
        else:
              dict[word] += 1
    print(dict)         
   sortedDict = sorted(dict.items(), key=lambda x: x[1], reverse=True)
   for x , y in sortedDict:  
     x = x.upper() 
     print(f'The word {x} is present in the file {y} times ')

 except FileNotFoundError:
        print('Error')
        
                    
