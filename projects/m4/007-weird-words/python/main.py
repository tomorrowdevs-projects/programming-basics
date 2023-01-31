from sys import argv
from onlywords import only_words

ie_true = []     #list that will contain all the words that follow the “I before E except after C” rule.
ie_false = []    #list that will contain all the words that violate the rule.

#fuction that will return True or False, based on whether they follow the rule or not.
def ie_rule(word):    #the parameter should be a word that contain adjacent E and I, else regardless it will return False.
    if "cei" in word or "ie" in word and "cie" not in word:
        return True
    else:
        return False

#process a file
try:
    with open(argv[1], "r") as file:
        for line in file:
            line_list = only_words(line)
            for word in line_list:
                if "ei" in word or "ie" in word:    #checking all the words with adjacents I and E and append them in their respective list.
                    if ie_rule(word):
                        if word not in ie_true:    #the lists should not contain any repeated words.
                            ie_true.append(word)    
                    else:
                        if word not in ie_false:
                            ie_false.append(word)

    follow_rule = ", ".join(ie_true)    #this method will convert the list into a string with a comma separator.
    violate_rule = ", ".join(ie_false)
    print(("Words that follow the 'I before E except after C' rule: {}") .format(follow_rule))
    print(("Words that violate the 'I before E except after C' rule: {}") .format(violate_rule))

except FileNotFoundError:
    print("File not found.")
except IndexError:
    print("Wrong number of command line arguments.")
    
      
                    
    
    

                


        
            