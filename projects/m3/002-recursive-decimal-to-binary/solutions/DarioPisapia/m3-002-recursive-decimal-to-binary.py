def intToBinary(n):
    if n == 0:
        return "0"
    elif n == 1:
        return "1"
    else:
        r = str(n%2)        
        return intToBinary(n//2)+r

if __name__ == "__main__":
    n = int(input("Enter here the number to convert: "))
    if n < 0:
        print("You insert a negative number, try again")
    else:
        print(f"Your number in binary is: {intToBinary(n)}")
