import sys

try:
    with open(sys.argv[1], "r") as file:
        lines = file.readlines()
        w = []
        for line in lines:
            line = line.lower().split(" ")      

            for word in line:
                word = word.strip()
                x = True
                while x:                   
                    if word[-1].isalpha():
                        w.append(word)
                        x = False
                    else:
                        word = word.replace(word[-1], "")

        n = 0
        most = []
        for word in w:
            cnt = w.count(word)
            if word not in most:
                if cnt > n:
                    n = cnt
                    most = [word]
                elif cnt == n:
                    most.append(word)
        
        print(f"The word that occurs the most is/are {most}, wich appears {n} times ")

except IndexError:
    print("Insert the name of the file, please")
except FileNotFoundError as file:
    print(f"File named {file.filename} does not exists")
