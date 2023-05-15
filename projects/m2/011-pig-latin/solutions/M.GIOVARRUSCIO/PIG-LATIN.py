"""
Pig Latin is a language constructed by transforming English words.
While the origins of the language are unknown, it is mentioned
in at least two documents from the nineteenth century,
suggesting that it has existed for more than 100 years. The
following rules are used to translate English into Pig Latin:

- If the word begins with a consonant (includingy),
then all letters at the beginning of the word, up to the first vowel (excluding y),
are removed and then added to the end of the word, followed by ay.
For example, *computer* becomes *omputercay* and *think* becomes *inkthay*.

- If the word begins with a vowel (not including y),
then way is added to the end of the word.
For example, algorithm becomes *algorithmway* and office becomes *officeway*.

Write a program that reads a line of text from the user.
Then your program should translate the line into Pig Latin and display the result.
You may assume that the string entered by the user only contains lowercase letters and spaces.

"""
def translate(word):
    #definizione della tupla delle consonanti
    consonant = ("b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "x", "w", "y", "z")
    str=""
    ris=""
    #se la parola inizia con una consonante
    if word[0] in consonant:
        str+=word[0]
        i=1
        while(word[i] in consonant):
            str += word[i]
            i += 1
        return word[i:] +str+"ay"
    #se la parola inizia con una vocale
    else:
        return word+"way"


if __name__ == '__main__':
    #inserimento del testo in text
    text=input("Inserire la frase da tradurre:  ")
    #text viene splittata in una lista
    words=text.split(" ")
    res=[]
    #per ogni parola si effettua la traduzione e si inserisce nella lista res
    for c in words:
        res.append(translate(c))
    #a questo punto la lista res viene trasformata in stringa e poi stampata a video
    res=" ".join(res)
    print(res)