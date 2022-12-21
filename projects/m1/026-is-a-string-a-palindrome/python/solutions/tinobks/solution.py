string = input("Enter a string (blank to quit): ")

while string != "":
    lenght = len(string)
    reverse_string = string[lenght::-1]
    
    if reverse_string == string:
        print("This string is a palindrome")
    else:
        print("This string is NOT a palindrome")
    break