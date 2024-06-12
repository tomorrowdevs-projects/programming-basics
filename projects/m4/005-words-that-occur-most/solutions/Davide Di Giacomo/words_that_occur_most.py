#Write a program that displays the word (or words) that occur most frequently in a file.
#Each line will need to be split into words, and any leading or trailing punctuation marks will need to be removed from each word.
#Your program should also ignore capitalization when counting how many times each word occurs.

import sys
import run_length_encoding_review 

def remove_punc(string):
    for char in string: 
        #if single letter is a punctuation marks (find throught ASCII code) remuve that
        if 32 < ord(char) < 48 or 57 < ord(char) < 65 or 90 < ord(char) < 97 or 122 < ord(char) < 192:  
            string = string.replace(char, " ") 
    return string

def counter():
    #if command line doesn't have argument
    if len(sys.argv)!=2:
        print("the argument in your command line is omitted!")
    else:
        try:
            f=sys.argv[1]
            list_solution=[]
            with open(f,'r') as f:
                    for line in f:
                        #remove punctuation marks with function
                        str_no_pun=remove_punc(line)
                        for word in str_no_pun.split():
                            #transform each single word in lowercase
                            word = word.lower()
                            #append each single word in solution_list if it isalpha
                            if word.isalpha()==True: list_solution.append(word)
            #with recursive function inported from another file count all letters in sorted order
            return(run_length_encoding_review.compressed((sorted(list_solution))))
        #if file doesn't exist
        except FileNotFoundError:
            print("File doesn't exist!")
            
def main():
    print(f"The numbers of words in your file are: {counter()}")

if __name__ == "__main__":
    main()