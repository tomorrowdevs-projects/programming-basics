#Any words that do not contain an E adjacent to an I should be ignored.
#Words contain an adjacent E and I should be examined to determine if they follow the “I before E except after C” rule.
#Construct and report two lists: One that contains all of the words that follow the rule, the other one no.
#Neither of your lists should contain any repeated values. Report the lengths of the lists

import sys

def counter():
    #if command line doesn't have argument
    if len(sys.argv)!=2:
        print("the argument in your command line is omitted!")
        return
    else:
        try:
            filename=sys.argv[1]
            #Construct and report two lists: One that contains all of the words that follow the rule, the other one no.
            list_follow_rule=[]
            list_exception=[]
            with open(filename, "r") as f:
                #reduce to lowercase all letters in file
                for line in f:
                    words=line.split()
                    for word in words:
                        word = word.lower()
                        #if the words follow the rules append in list1
                        if "ie" in word or "cei" in word:
                            list_follow_rule.append(word)
                        #if not append in list2
                        elif "ei" in word:
                            list_exception.append(word)
                return len(list_follow_rule), len(list_exception)
        #if file doesn't exist
        except FileNotFoundError:
            print("File doesn't exist!")
            
            
def main():
    print(f"The words who respect the rule 'I before E except after C' are the first value and the words with exception are the second value: {counter()}")

if __name__ == "__main__":
    main()