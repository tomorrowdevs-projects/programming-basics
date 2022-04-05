"""Two words are anagrams if they contain all of the same letters, but in a different order. 

For example, “evil” and “live” are anagrams because each contains one “e”, one “i”, one “l”, and one “v”. 

Create a program that reads two strings from the user,
determines whether or not they are anagrams, and reports the result.
 	"""


word1 = "evil"
word2 = "live"

dict_word1 = {}
dict_word2 = {}
for c1 in word1:
    dict_word1[c1] = dict_word1.get(c1,0)+1
for c2 in word2:
    dict_word2[c2] = dict_word2.get(c2,0)+1
if dict_word1 == dict_word2:
    print("Anagram")
else:
    print("No anagram")
print(dict_word1, dict_word2)