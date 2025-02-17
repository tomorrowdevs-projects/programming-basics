import math
from operator import index
word = input("Insert a word to determinate if is palindrome or not:")
palindrome = list(word)
if len(palindrome)%2==0:
    lenght=len(palindrome)/2
else:
    lenght_2=len(palindrome)/2
    lenght = math.floor(lenght_2)
for i in palindrome:
    while palindrome.index(i) <= lenght:
        if palindrome[palindrome.index(i)] == palindrome[-(palindrome.index(i))-1]:
            print (f"Your word {word} is palindrome!")
            break
        else:
            print (f"Your word {word} isn't palindrome!")
            break
    break 