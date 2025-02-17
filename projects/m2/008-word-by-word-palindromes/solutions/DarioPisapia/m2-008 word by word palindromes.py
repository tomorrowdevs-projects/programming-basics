
def word_palindrome(string):
    string = string.split(" ")
    palindrome = []
    for word in string:
        if word[-1].isalpha() == False:
            palindrome.append(word[0:-1])
        else:
            palindrome.append(word)
    if palindrome[:] == palindrome[-1::-1]:
        return "Yes! It's a palindrome!"
    else:
        return "Ehm...no...try again"

if __name__ == "__main__":
    string = input("Digit the phrase and look if it's a palindome or not!\n")
    print(word_palindrome(string))
