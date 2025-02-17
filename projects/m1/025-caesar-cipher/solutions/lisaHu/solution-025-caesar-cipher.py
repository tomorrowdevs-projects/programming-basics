alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
phrase = input('Enter phrase to code/encode:  ')
shift = int(input('Enter number of shift (positive num to encode, negative num to decode):  '))


phrase = phrase.lower()
for letter in phrase:
    if letter not in alphabet:
        continue

    #index= i find the position of the current letter in the list alphabet and i add the shift number
    index = alphabet.index(letter) + shift

    #if index is 26 or bigger, the program would give an error as the list is made of only 26 elements (25 if we count from 0 and not 1).
    #as a way to "itirate" through the list so that the letter is replaced by the letter we want to that appears earlier in the list.
    if index >= 26:
        index = index - 26
        phrase= phrase.replace(letter, alphabet[index])

    #if index smaller than 26, the issue explained upon is not present so there is no need to subtract
    if 0 <= index < 26:
        phrase = phrase.replace(letter, alphabet[index])

    #same reasoning of the first if statement (aka what if index is a number that's not present in alphabet list?) but on the negative side
    if index < 0:
        index = index + 26
        phrase= phrase.replace(letter, alphabet[index])

print(phrase)