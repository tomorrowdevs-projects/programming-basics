input = input('Enter word: ')
reversed_input = ''

for letter in reversed(input):
    reversed_input = reversed_input + letter
    
if reversed_input == input:
    print('This is a palindrome!')
else:
    print("This isn't a palindrome!")



    


    


