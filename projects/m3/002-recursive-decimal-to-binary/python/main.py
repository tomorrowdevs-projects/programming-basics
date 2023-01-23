def dec_to_bin(n):
    if int(n) > -1:
        n = int(n)
        if n == 0:
            binary = "0"
        elif n == 1:
            binary = "1"
        else:
            binary = (dec_to_bin(n//2)) + str(n % 2) 
    else:
        return("Only non-negative decimal number are allowed.")
        
    return(binary)

def main():
    user_n = input("Enter a an integer to convert to binary: ")
    print(dec_to_bin(user_n))

if __name__ == "__main__":
    main()
    
    
    