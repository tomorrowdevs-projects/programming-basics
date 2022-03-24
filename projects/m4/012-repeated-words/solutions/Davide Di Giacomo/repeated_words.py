#In this exercise you will write a program that detects repeated words in a text file.
# When a repeated word is found your program should display a message that contains the line number and the repeated word.
#The name of the file to examine will be provided as the program’s only command line argument.

import sys

def find_repetition():
    #if command line doesn't have argument
    if len(sys.argv)!=2:
        print("the argument in your command line is omitted!")
    else:
        #check file by try-except 
        try: #try to open a file
            filename=sys.argv[1]
            #list for repetition word
            repetition_word=[]
            with open(filename) as f:
                #with a cicle read line by line and create a counter for line number
                for counter, line in enumerate(f):
                    words_list=line.split()
                    for x in range((len(line.split())-1)):
                        #if word is the same of previous word add it in a list
                        if words_list[x]==words_list[x+1]: repetition_word.append(f" '{words_list[x]}' in line {counter+1}")
                return repetition_word
        #if file doesn't exist
        except FileNotFoundError:
            print("File doesn't exist!")
            
def main(): 
    print(find_repetition())
        
if __name__ == "__main__":
    main()