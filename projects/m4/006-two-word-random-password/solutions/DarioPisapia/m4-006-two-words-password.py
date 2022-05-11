import random
import sys

try:
    with open(sys.argv[1], "r") as file:
        file = file.read().lower().rstrip().split(" ")

        valid_wrd = []
        for word in file:
            if 2 < len(word) < 8:
                word = word.capitalize()
                valid_wrd.append(word)

        x = False
        while x is False:
            w1 = random.choice(valid_wrd)
            w2 = random.choice(valid_wrd)
            if 7 < len(w1) + len(w2) < 11 and w1 != w2:
                password = w1+w2
                x = True

    print(password)  

except FileNotFoundError as file:
    print(f"The file named {file.filename} does not exists")
except IndexError:
    print("File's name missing, please insert one")
    