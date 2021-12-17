# Write a program that reads a string from the user and uses a loop to determine 
# whether or not it is a palindrome.

word = input('Insert a word: ')

#letter index
start_letter = -1
last_letter = len(word) 

for letter in word:
    start_letter += 1
    last_letter -= 1

    if start_letter > last_letter:
       print('The entred word is palindrome.')
       break       
    if letter != word[last_letter]:
        print('The entred word is not palindrome.')
        break
          

      
 


    
      









