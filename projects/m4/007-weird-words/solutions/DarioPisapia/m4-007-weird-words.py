import sys

try:
    with open(sys.argv[1], "r") as file:
        file = file.read().strip().split()
    
        rule = []
        weird = []
        for word in file:
            if "cei" in word:
                if word not in rule:
                    rule.append(word)
                file.remove(word)
            elif "ei" in word:
                if word not in weird:
                    weird.append(word)
                file.remove(word)
            
            for word in file:
                if "ie" in word:
                    if word not in rule:
                        rule.append(word)
                    file.remove(word)

        print(f"The words that respect the rule in this file are: {len(rule)}\nThe exceptions are: {len(weird)}")
except FileNotFoundError as file:
    print(f"File named {file.filename} does not exists")
except IndexError:
    print("No file name given")
