import sys 
if len(sys.argv) < 1:
    print('The command line argument is omitted.')    
list={}
count = 0
try:

  with open(sys.argv[1], 'r')as f:
    for line  in  f: 
         words = line.lstrip().rstrip().split(" ")  
         for  word in words:
           
            print(word)
            
    #for x , y in list.items():   
     #print(f'The Letter{x} is present in the file {y} times , and Frequency is : {round((y/count)*100, 2)}%")\n The text has {count} words ')

except FileNotFoundError:
        print('Error')
   
