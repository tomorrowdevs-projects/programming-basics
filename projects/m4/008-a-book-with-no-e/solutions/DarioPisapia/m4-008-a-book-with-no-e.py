import sys

try:
    with open(sys.argv[1], "r") as file:
        file = file.read().lower().split()

        letters = {
        "a":0, "b":0, "c":0, "d":0, "e":0, "f":0, "g":0,
        "h":0, "i":0, "j":0, "k":0, "l":0, "m":0, "n":0,
        "o":0, "p":0, "q":0, "r":0, "s":0, "t":0, "u":0,
        "v":0, "w":0, "x":0, "y":0, "z":0
        }
        for key in letters:
            for w in file:
                if key in w:
                    letters[key] += 1
            print(f"{key}: {letters[key]}  {letters[key]/len(file)*100:.2f}%")

        minimum = min(letters.values()) 
        less = []      
        for key in letters:
            if letters[key] == minimum:
                less.append(key)
        less =  ", ".join(less)     
        print(f"The letter that appears less time is/are '{less}' with only {minimum} apparitions")

except FileNotFoundError as file:
    print(f"File named {file.filename} does not exists")
except IndexError:
    print("Please enter file's name")
        