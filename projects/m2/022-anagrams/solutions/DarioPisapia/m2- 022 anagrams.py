def anagrams(string1, string2):
    if len(string1) == len(string2) and string1 != string2:
        for letter in string1:
            if letter not in string2:
                return "No, try again..."
        else:
            return "Yes! They are anagrams!"
    else:
        return "No, try again..."

if __name__ == "__main__":
    string1 = input("Digit here your first string: ")        
    string2 = input("Digit here your second string: ")
    print(anagrams(string1, string2))
