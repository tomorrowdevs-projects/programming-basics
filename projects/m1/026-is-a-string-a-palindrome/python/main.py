string = input("Insert a string. I'll show you if it's palindrome ")
string = string.replace(" ","")
string = string.lower()

is_palindrome = True
index = 0

while is_palindrome and index<(len(string)/2):
    if string[index]!=string[-(index+1)]:
        is_palindrome = False
    index +=1

if is_palindrome:
    print("It's palindrome")
else:
    print("It's NOT palidrome")
