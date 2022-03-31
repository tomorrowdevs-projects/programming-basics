"""
Create a program that reads a string from the user. 
Your program should report whether or not the entered string is a word by word palindrome. 
Ignore spacing and punctuation when determining the result."""


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


#Is it crazy how saying sentences backwards creates backwards sentences saying how crazy it is?
sentence = input("please enter the sentence: ")
sentence = only_the_words(sentence)
new_sentence = []
for el in sentence:
    new_sentence.append(el.lower())
#print(new_sentence)
if new_sentence == new_sentence[-1::-1]:
    print("That's a word by word palindrome!")
else:
    print("This isn't a word by word palindrome!")
