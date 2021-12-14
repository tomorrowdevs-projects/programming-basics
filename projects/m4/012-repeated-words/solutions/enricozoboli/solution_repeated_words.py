import string
import sys

punctuaction = string.punctuation
line_counter = 0
last_word = ""

try:
    with open(sys.argv[1]) as reader:
        for line in reader:
            line_counter += 1
            words = line.split()
            for index in range(1, len(words)):
                #comparing word with his preceding
                if words[index] == words[index-1]:
                    #checking if the last character is a punctuation mark because 
                    #two repeated words separate by a punctuation mark aren't duplicates
                    if words[index][-1] not in punctuaction:
                        print(f"Word '{words[index]}' is repeated"
                        f" in line {line_counter}")
                #comparing last word of the previus line with the first
                #of the actual line
                if words[0] == last_word:
                    print(f"Word '{words[0]}' is repeated in line" 
                    f" {line_counter} (see previus line)")
                    #reset last world variable to avoid print repetition
                    last_word = ""
            if words:
                #assign variable name last_word to the final word of the line 
                last_word = words[-1]  
except FileNotFoundError as fnf_error:
    print(fnf_error)
    print("File does't exist or wrong path")
except IndexError as indx_error:
    print(indx_error)
    print("Provide a valid argument")
    



