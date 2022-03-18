#Your program should display a meaningful error message if the user provides the wrong number of command line arguments,
# or if the program is unable to open the file indicated by the user.
#Write a program that initiates this process by determining and displaying the frequencies of all of the letters in a file.

#create list with all letters(uppercase or lowercase)
#with a cicle add each letter in a list
#with recursive compressed a list e return the result
import sys
import run_length_encoding_review
alphabet=["a", "e", "i", "o", "u", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z", "y"]

def counter():
    #if command line doesn't have argument
    if len(sys.argv)!=2:
        print("the argument in your command line is omitted!")
    else:
        try:
            filename=sys.argv[1]
            list_solution=[]
            with open(filename, "r") as f:
                #reduce to lowercase all letters in file
                for line in f:
                    for char in line:
                        char = char.lower()
                        #with a cicle find all letters and append to a list
                        for x in range(0, len(alphabet)):         
                            if alphabet[x]==char:
                                list_solution.append(alphabet[x])
                        if not char:
                            break
                #with recursive function inported from another file count all letters in sorted order
                return(run_length_encoding_review.compressed((sorted(list_solution))))
        #if file doesn't exist
        except FileNotFoundError:
            print("File doesn't exist!")
            
def main():
    print(f"The numbers of letters in your file are: {counter()}")

main()
    
                
    

