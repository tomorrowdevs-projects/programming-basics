# write a program that redacts all occurrences of sensitive words in a text file by replacing them with asterisks.
#even if they occur in the middle of another word. The list of sensitive words will be provided in a separate text file.
#The names of the original text file, sensitive words file, and redacted file will all be provided by the user.
#For an added challenge, extend your program so that it redacts words in a case insensitive manner.

def find_sentive_words(sensitive_words):
    sensitive_words_list=[]
    try:
        #open file and add word by word to sensitive_words_list
            with open(sensitive_words, "r") as f:
                for line in f:
                    for word in line.split():
                        #case insensitive 
                        sensitive_words_list.append(word.lower())
                return sensitive_words_list   
# if file doesn't exist
    except FileNotFoundError:
        print("File doesn't exist!")

#function to remove punctuation  
def remove_punc(string):
    for char in string: 
        #if single letter is a punctuation marks (find throught ASCII code) remove that
        if 32 < ord(char) < 48 or 57 < ord(char) < 65 or 90 < ord(char) < 97 or 122 < ord(char) < 192:  
            string = string.replace(char, " ") 
    return string
        
def redacted_new_file(original_file, sensitive_words, redacted_file):
    sensitive_list=find_sentive_words(sensitive_words)
    try: 
        #open original file to read line and open redacted_file for copy all lines from original file
        with open(original_file, "r") as original, open (redacted_file, "w") as copy:
            for line in original:
                #case insensitive
                line=line.lower()
                words_list=line.split()
                for x in range(len(words_list)):
                    word=words_list[x]
                    #remove punctuation
                    word=remove_punc(word)
                    if word in sensitive_list:
                        #replace each single letter in word with asterisk
                        copy_line=line.replace(word, "*" * len(word))
                        #write the changes
                        copy.write(copy_line)
                        break
                #if the word is not a sensitive word, write all line
                else: copy.write(line)
        copy.close()
        with open (redacted_file, "r") as copy:
            for line in copy:
                return(line)
# if file doesn't exist
    except FileNotFoundError:
        print("File doesn't exist!")
             
def main():
    original_file = input("Enter the name of the original file: ")
    sensitive_words = input("Enter the name of the sensitive_words_file: ")
    redacted_file = input("Enter the name for the redacted file: ")
    print(redacted_new_file(original_file, sensitive_words, redacted_file))

if __name__ == "__main__":
    main()