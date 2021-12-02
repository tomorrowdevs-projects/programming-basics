import sys

try:
    with open(sys.argv[1]) as f:
        rev_lst = list(f)[-10::1]
        for line in rev_lst:
            if line:
                print(line.strip())
except FileNotFoundError as fnf_error:
    print(fnf_error)
    print("File doesn't exist or wrong path")
except IndexError as idx_error:
    print(idx_error)
    print("Enter a file as argument.")

    
    

