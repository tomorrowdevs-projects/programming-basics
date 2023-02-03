from sys import argv

frequencies = {}    #creating an empty dictionary to put the letter frequencies in.

try:
    with open(argv[1], "r") as file:
        for line in file:
            for char in line:
                char = char.lower()    #using lower() function because the program must be case insensitive.
                if char.isalpha():    #using isalpha() function because we have to ignore every character except alphabetic ones.
                    if char not in frequencies:
                        frequencies[char] = 1    #adding character and it's value to the dict 'frequencies'.
                    else:
                        frequencies[char] += 1    #if character already exists in the dict, then the value increases by 1.

    print("Frequencies of all letters in the file:")
    for key, value in sorted(frequencies.items()):    #sort the dict in alphabetical order and print each char with it's frequency.
        print(("{} : {}") .format(key, value))




except FileNotFoundError:
    print("File not found.")
except IndexError:
    print("Wrong number of command line arguments")