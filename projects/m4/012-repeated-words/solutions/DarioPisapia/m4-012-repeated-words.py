import sys

try:
    repeated = {}
    with open(sys.argv[1], "r") as file:

        lines = file.readlines()
        nline = 0     
        tmp = ""                              
        for line in lines:
            nline += 1
            line = line.strip().split()

            #reoving punctuation
            for word in line:
                while True:
                    if word[-1].isalpha():
                        break
                    else:
                        word = word.replace(word[-1], "")

                #checking for repeated words       
                if word != tmp:
                    tmp = word
                else:
                    repeated[word] = nline

        if repeated == {}:
            print("Nice job, no repeated words found!")
        else:
            print(f"The repeated words are: ")
            for key in repeated:
                print(f"\'{key}\' at line {repeated[key]}")

except IndexError:
    print("Please enter file's name") 
except FileNotFoundError as file:
    print(f"The file {file.filename} does not exists")
except:
    print("Error occured during process")

