#constraint:  contains each of the vowels A, E, I, O, U and Y exactly once and in order.
#Write a program that searches a file containing a list of words and displays all of the words that meet this constraint.
#The user will provide the name of the file that will be searched.
#Display an appropriate error message and exit the program if the user provides an invalid file name

def find_single_word(file):
    words_list=[]
    try:
        #open file and add word by word to sensitive_words_list
            with open(file, "r") as f:
                for line in f:
                    for word in line.split():
                        #case insensitive 
                       words_list.append(word.lower())
                return words_list  
    except FileNotFoundError:
        print("File doesn't exist!")   

def find_vowels(file):
    words_list=find_single_word(file)
    list_result=[]
    for x in words_list:
        #if a word has all wowels and in order add it in result list 
        if "a" and "e" and "i" and "o" and "u" and "y" in x and x.index("a")<x.index("e")<x.index("i")<x.index("o")<x.index("u")<x.index("y"):
            list_result.append(x)
    return list_result
        
def main():
    list_words_file = input("Enter the name of the words file: ")
    print(f"The words who have all the vowels in order are: {find_vowels(list_words_file)}")
    
if __name__ == "__main__":
    main()