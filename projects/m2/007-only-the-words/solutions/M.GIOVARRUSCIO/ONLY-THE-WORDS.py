"""
In this exercise you will create a program that identifies all of the words
in a string entered by the user.
Begin by writing a function that takes a string as its only parameter.
Your function should return a list of the words in the string
with the punctuation marks at the edges of the words removed.
The punctuation marks that you must consider include commas, periods, question marks,
hyphens, apostrophes, exclamation points, colons, and semicolons.
Do not remove punctuation marks that appear in the middle of a word,
such as the apostrophes used to form a contraction.
For example, if your function is provided with the string
*"Contractions include: don’t, isn’t, and wouldn’t."*
then your function should return the list
*["Contractions", "include", "don’t", "isn’t", "and", "wouldn’t"]*.
Write a main program that demonstrates your function.
It should read a string from the user and then display all of the words
in the string with the punctuation marks removed.
"""

import re
def listaParole(s):
    l=s.split()
    new_l = []
    for c in l:
        regex = r"[,;\.:!\?]$|^[,;\.:!\?]"
        c=re.sub(regex,'',c)
        new_l.append(c)
        s1=''.join(((str(e)+' ') for e in new_l))
    return s1

if __name__ == '__main__':
        s = "Contractions include: don’t, isn’t, and wouldn’t."
        print(s)
        print(listaParole(s))