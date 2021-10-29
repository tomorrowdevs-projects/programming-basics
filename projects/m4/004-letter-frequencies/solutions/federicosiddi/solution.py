import sys

if len(sys.argv) == 1:
    print("Please provide file to read as argument")
    quit()

characters_dict = {}

count = 0
# Counter for total number of chars

try:
    with open(sys.argv[1], "r") as f:
        for line in f:
            for char in line:
                char = char.lower()
                if char.isalpha():
                    if char not in characters_dict:
                        characters_dict[char] = 1
                        count += 1
                    else:
                        characters_dict[char] += 1
                        count += 1
                        
        for key, value in sorted(characters_dict.items()):
            print(f"Letter: {key}, {value} times counted. Frequency: {round((value/count)*100, 2)}%")    
        print(f"Total letters in file: {count}")
except FileNotFoundError as err:
    print(err)
    
