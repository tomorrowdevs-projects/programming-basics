try:
    file = input("Enter the file's name here: ")
    with open(file, "r") as file:
        file = file.read().split()
        vowels = ["a", "e", "i", "o", "u", "y"]
        words = []
        for word in file:
            word = word.lower()
            ref = []
            for char in word:
                if char in vowels:
                    ref.append(char)
            if ref == vowels:
                words.append(word)
        
        if len(words) == 0:
            print("There are no words in this file that respect this constraint")
        else: 
            print("The words that respect this costraint are the following:")   
            for w in words:
                print(w)
except FileNotFoundError as file:
    print(f"No file \'{file.filename}\' found")
except:
    print("Error occurred, please check everything and try again")
    