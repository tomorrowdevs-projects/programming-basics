#If the word begins with a consonant, beginning with the first vowel
#added the consonant removed to the end of the word, followed by "ay"
#If the word begins with a vowel, added "way" to the end of the word.
#split the input string in a list
#search with cicle in a list if the first word's letter is a vowel or consonant
#it's vowel add "way" at the end of the word
#it's consonant, remove that and add at the end consonant+"ay"
#return a pig_latin string
vowels = ("a", "e", "i", "o", "u")
consonants = ("b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "y", "x", "z")

def transform(string):
    trasform=[]
    #split the input string in a list
    word=string.split(" ")
    #search with cicle in a list if the first word's letter is a vowel or consonant
    for x in range(0, len(word)):
        check = list(word[x])
        #it's vowel add "way" at the end of the word
        if check[0] in vowels:
            check.append("way") 
            check= "".join(check)
            trasform.append(check)
        #it's consonant, remove that and add at the end consonant+"ay"
        elif check[0] in consonants:
            check.append(check[0])
            check.remove(check[0])
            check.append("ay")
            check= "".join(check)
            trasform.append(check)
    #return a pig_latin string        
    return " ".join(trasform)
    
string=input("Enter a string to transform in pig latin: ")
print(transform(string))