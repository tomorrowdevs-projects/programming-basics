#decimal base to arbitrary base
def decimal_to_base(base,n):
    result = ""
    base = int(base)
    n = int(n)
    if base < 2 or base > 16:
        return("ERROR: the base must be between 2 and 16.")
    if n != 0: 
        while n != 0:
            r = n % base
            if r > 9:    
                if r == 10: 
                    r = "A"
                if r == 11: 
                    r = "B" 
                if r == 12: 
                    r = "C"
                if r == 13: 
                    r = "D"
                if r == 14: 
                    r = "E"
                if r == 15: 
                    r = "F"  
            result = str(r) + result[0:] 
            n = n // base
    else:   
        result = 0

    return(result)

#arbitrary base to decimal base
def base_to_decimal(base,n):
    base = int(base)
    if base < 2 or base > 16:
        return("ERROR: the base must be between 2 and 16.")
    power = len(n)-1
    result = 0
    for r in str(n):
        if r == "A":
            r = 10
        if r == "B":
            r = 11
        if r == "C":
            r = 12
        if r == "D":
            r = 13
        if r == "E":
            r = 14
        if r == "F":
            r = 15
        r = int(r)
        conversion = r*(base**power)
        power -= 1
        result += conversion

    return(result)

#main program
def main():
    print("Reminder: enter correct bases and correct numbers if you want this program to work properly.")
    print("")
    print("Enter 1 to convert from decimal to an arbitrary base or")
    choice = int(input("enter 2 to convert from an arbitrary base to decimal: "))
    user_n = (input("Enter the number to convert: "))
    user_base = (input("Enter the arbitrary base: "))
    if choice == 1:
        new_n = decimal_to_base(user_base,user_n)
        print(("This decimal number becomes {} in base {}.") .format(new_n,user_base))
    elif choice == 2:
        new_n = base_to_decimal(user_base,user_n)
        print(("This number in base {} becomes {} in decimal.") .format(user_base,new_n))
    else:
        print("ERROR: you didn't enter a correct choice.")

if __name__ == "__main__":
    main()