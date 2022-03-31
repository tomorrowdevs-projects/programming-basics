"""
In this exercise, you will create a program that reads words from the user until the user enters a blank line. 
After the user enters a blank line your program should dis- play each word entered by the user exactly once. 
The words should be displayed in the same order that they were first entered. 

For example, if the user enters:
*first*
*second*
*first*
*third*
*second*

then your program should display:
*first*
*second*
*third*
"""

word_list = [] #external to the loop or it doesn't work!!!!
while True:
    word = input("Please enter the word (blank to stop): ")
    if word == "":
        break
    if word not in word_list:
        word_list.append(word)
    else:
        continue

     

print(word_list)

