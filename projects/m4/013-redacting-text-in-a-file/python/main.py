from onlywords import only_words

#name of the files provided by the user
original_file = input("Enter the name of the original file: ")
sensitive_words_file = input("Enter the name of the file that contains the sensitive words: ")
redacted_file = input("Enter the name of the redacted file: ")

#list that will contain the sensitive words
sensitive_words = []

#appending to the list above the sensitive words from a separate file
try:
    with open(sensitive_words_file, "r") as sens_file:
        for line in sens_file:
            sens_words = only_words(line)
            for word in sens_words:
                #the redaction should be case insensitive so i append the words with all lowercase letters
                sensitive_words.append(word.lower())
except FileNotFoundError:
    print(("File {} not found.") .format(sensitive_words_file))
except IndexError:
    print("Wrong number of command line arguments.")

#opening the original file and the redacting file where we will write the text from the original with redaction
try:
    with open(original_file, "r") as file, open(redacted_file, "w") as new_file:
        #checking every line from original file
        for line in file:
            for word in sensitive_words:
                #if there is sensitive words in the line (.lower because it must be case insensitive)
                if word in line.lower():
                    #redacting the line with asterisk in case of sensitive words: new line becomes = line[0:sensitive_word] + asterisks + line[after_asterisk:-1]
                    #with this method i will not lose any capitalization outside of sensitive words.
                    line = line[0:line.lower().index(word)] + "*"*len(word) + line[line.lower().index(word) + len(word):]
        
            #writing the redacted line in the new redacted file
            new_file.write(line)
    #displaying redacted file
    with open(redacted_file, "r") as file:
        print(file.read())
        

except FileNotFoundError:
    print("File or files not found.")
except IndexError:
    print("Wrong number of command line arguments.")