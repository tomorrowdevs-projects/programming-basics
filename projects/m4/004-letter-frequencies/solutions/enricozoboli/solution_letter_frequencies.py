import sys
import string

try:
    with open(sys.argv[1]) as reader:
            char_frequencies = {}
            total_char_counter = 0
            for line in reader:
                for char in line:
                    char = char.strip(string.punctuation + string.digits +\
                        string.whitespace)
                    if char and char !='—':
                        total_char_counter += 1
                        char_frequencies[char.lower()] =\
                            char_frequencies.get(char.lower(), 0) + 1
            print(f"Total letters: {total_char_counter}")
            for k,v in sorted(char_frequencies.items()):
                print(f"'{k}' is repeated {v} times." 
                f" Frequency {(v/total_char_counter)*100:.2f}%")
               
except FileNotFoundError as fnf_error:
    print(fnf_error)
    print("File doesn't exist or wrong path")
except IndexError as idx_error:
    print(idx_error)
    print("Enter a file as argument.")
else:
    if len(sys.argv) < 2:
        print("Enter a file as argument") 