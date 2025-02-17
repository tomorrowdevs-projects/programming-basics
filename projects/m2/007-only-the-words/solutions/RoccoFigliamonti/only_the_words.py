"""# Only the Words

In this exercise you will create a program that identifies all of the words in a string entered by the user. Begin by writing a function that takes a string as its only parameter. Your function should return a list of the words in the string with the punctuation marks at the edges of the words removed. The punctu- ation marks that you must consider include commas, periods, question marks, hyphens, apostrophes, exclamation points, colons, and semicolons. Do not remove punctuation marks that appear in the middle of a word, such as the apostrophes used to form a contraction. 
For example, if your function is provided with the string *"Contractions include: don’t, isn’t, and wouldn’t."* then your function should return the list *["Contractions", "include", "don’t", "isn’t", "and", "wouldn’t"]*.
Write a main program that demonstrates your function. 
It should read a string from the user and then display all of the words in the string with the punctuation marks removed.
"""


def only_the_words(phrase):
    punct_set = (".", ",", "?", "!", ":", ";", "-")
    new_phrase = ""
    definitive_phrase = ""
    for char in phrase:
        #print(char)
        if char not in punct_set: #remove all the punctuation in punt_set
            #print(char)
            #print(True)
            new_phrase += char
    for i in range(len(new_phrase)):
        if not (new_phrase[i] == "'" and (new_phrase[i-1] == " " or new_phrase[i+1] == " ")): #remove the ' which are not in contractions
            definitive_phrase += new_phrase[i]
    words = definitive_phrase.split()
    return words


sentence = str(input("Please enter a sentence: "))
print(only_the_words(sentence))

#Do you want a coffee? No thanks, i don't. Ho mangiato il minestrone: faceva un po' schifo!


