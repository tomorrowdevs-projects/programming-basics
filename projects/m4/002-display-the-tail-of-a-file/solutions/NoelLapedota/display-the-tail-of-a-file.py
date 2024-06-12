import sys
try:
    count = 0
    with open(sys.argv[1]) as f:
        while count != 10:
         print(f.readline())
         count += 1

except FileNotFoundError:
         print("The file does not exist.")
except IndexError:
         print("Please provide a file to read as argument") 