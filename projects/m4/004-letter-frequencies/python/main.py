import sys

try:
    
    f = open(sys.argv[1],"r")
    letter_frequency = {}
    marks = "!?`.:; -,_\/^'"+'"'+"\n"

    content = f.read()
    for char in content:

        char = char.upper()
        if char not in marks and not char.isdigit():
            try:
                letter_frequency[char] +=1

            # if a key error exception is raised means that key does not exist in the dictionary yet 
            # so handle the exception by initializing the frequency of that key(letter) to 1
            except KeyError:
                letter_frequency[char] = 1

    for key in letter_frequency.keys():
        print( f"{key} : {letter_frequency[key]} times")

    f.close()

except FileNotFoundError:
    print("ERROR! File not found")
except IndexError:
    print("ERROR! File name arg omitted")
    