import sys

try:
    with open(sys.argv[1]) as reader:
        for i in range(10):
            line = reader.readline()
            print(line)
except FileNotFoundError as fnf_error:
    print(fnf_error)
    print("File doesn't exist or wrong path")
except IndexError as idx_error:
    print(idx_error)
    print("Enter a file as argument.")

