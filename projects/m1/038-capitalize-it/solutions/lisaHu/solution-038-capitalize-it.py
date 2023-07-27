def capitalize(string):

    #creation of list that contains puntuaction marks. the for loop will search in this list
    #conversion of string from user in list
    symbols = [' ', '?', '!', "'", '.', '']
    uppercase = [each for each in string]

    #capitalize the first letter and checking if the first character is blank space
    if uppercase[0] != ' ':
        uppercase[0] = uppercase[0].upper()
    else:
        uppercase[1] = uppercase[1].upper()
    
    #for loop: for every element in the range of list Uppercase
    #the 1st if statement check that the element(char) has a smaller index than total elements in uppercase - 2
    #it will avoid errors in case the selected char is outside of list range
    for char in range(len(uppercase)):
        if char < (len(uppercase) - 2):

            #if statement for letter I, making the program search through the list of puntuaction marks
            if uppercase[char] == 'i' and uppercase[char-1] == ' ':
                if uppercase[char+1] in symbols:
                    uppercase[char] = uppercase[char].upper()
            
            #if letter for punctuations marks (using the list of punctuaction marks doesn't work)
            elif uppercase[char] == "!" or uppercase[char] == '?' or uppercase[char] == '.':
                uppercase[char+2] = uppercase[char+2].upper()
        
        #if character has a smaller index than total elements in uppercase - 1  AND  it's just letter I, it will make it uppercase
        elif char < (len(uppercase) - 1):
            if uppercase[char] == 'i' and uppercase[char-1] == ' ':
                if uppercase[char+1] in symbols:
                    uppercase[char] = uppercase[char].upper()

    #return w/ print statement of new list with capitalized letters
    return print(*uppercase, sep = '')

#input from user and call of function
lowercase = input('Enter a string:\n')
capitalize(lowercase)

