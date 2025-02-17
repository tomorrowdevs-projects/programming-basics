import sys

if len(sys.argv) != 2:
    print('Enter a argoument')
else:
    try:
        f = open(sys.argv[1])
        x = lambda a : a * 10
        print(x(f.readline())) 
        f.close()
    except FileNotFoundError:
         print("The file does not exist.")
    except IndexError:
         print("Please provide a file to read as argument")     
