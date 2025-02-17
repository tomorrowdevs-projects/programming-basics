import sys
try:
    for file in range(1, len(sys.argv)):
            with open(sys.argv[file],encoding='utf-8') as f:
             print(f.read().strip()) 
except FileNotFoundError:
         print("The file does not exist.")
except IndexError:
         print("Please provide a file to read as argument") 
