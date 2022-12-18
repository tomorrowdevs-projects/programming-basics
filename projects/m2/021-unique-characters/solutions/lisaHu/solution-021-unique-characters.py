phrase = input('Enter a phrase: ')
unique_chars = set()
#check if every character in phrase is already in unique_chars, otherwise add it to set
for c in phrase.lower():
    if c not in unique_chars:
        unique_chars.add(c)
    else:
        continue
#count how many unique characters there are and display result
result = len(unique_chars)
print('The unique characters in your phrase are: ' + str(result))