
def total_the_values_rec():
    """
    Function sums user inputs and returns the total when user inputs a blank line. 
    If the first input is a blank line returns 0.
    """
    usr_input = input("Please enter a digit: \n")
    
    #Base Case
    if usr_input == "":
        return 0
    
    #Recursive Case
    else:
        return int(usr_input) + total_the_values_rec() 

def main():
    print(total_the_values_rec())

if __name__ == "__main__":
    main()