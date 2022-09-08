#create variable of input and an empty variable that will store the reversed first variable
phrase = input('Enter a string to check if it\'s a palindrome:  ')
inverse = ''

#create a for loop for each character (x). the loop will start at the ending of the 1st variable, adding first the last letters
for x in reversed(phrase):
    inverse = inverse + x

#check if the result is the same as the first string entered by user
if inverse.lower() == phrase.lower():
    print(inverse + ' is a palindrome')
else:
    print(inverse + ' is not a palindrome')