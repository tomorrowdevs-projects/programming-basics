import sys

try:
    for file in sys.argv[1:]:
        with open(file) as reader:
            for line in reader:
                print(line.strip())

except FileNotFoundError as fnf_error:
    print(fnf_error)
    print("File doesn't exist or wrong path")

except IndexError as idx_error:
    print(idx_error)
    print("Enter a file as argument.")

else:
    if len(sys.argv) < 2:
        print("Enter at least one file as argument") 