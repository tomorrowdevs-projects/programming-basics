import sys

try:
    
    f = open(sys.argv[1],"r")
    word_frequency = {}
    marks = "!?`.:;,()}{[] -_\/^'"+'"'

    for line in f:
        words = line.split()
        for word in words:
            word = word.upper()

            #if a word contain a punctuation mark it will removed by replace string method
            for char in word:
                if char in marks:
                    word = word.replace(char,"")

            try:
                word_frequency[word] +=1
            except KeyError:
                word_frequency[word] = 1

    #l is a list of tuples (key:value) contained in word_frequency dict sorted in descending order
    l = sorted(word_frequency.items(), key= lambda x:x[1], reverse=True)
    
    #max_frequency is the highest number of occurs of a word in file
    max_frequency = l[0][1]
    
    #this loop is created to print all words found with same frequency of max_frequency
    index = 0
    while l[index][1] == max_frequency:
        print( f"{l[index][0]}: {l[index][1]}")
        index += 1

    f.close()

except FileNotFoundError:
    print("ERROR! File not found")
except IndexError:
    print("ERROR! File name arg omitted")
