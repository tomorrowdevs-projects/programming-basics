import sys
try:
    with open(sys.argv[1],encoding='utf-8') as f:
        f.readline()[-10:]
        
except FileNotFoundError:
         print("The file does not exist.")
except IndexError:
         print("Please provide a file to read as argument")     
