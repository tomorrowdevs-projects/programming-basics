def hex2int(value):
    value_list_str = ["A","B","C","D","E","F","a","b","c","d","e","f"]
    value_list_int = [0,1,2,3,4,5,6,7,8,9]
    if value in value_list_str:
        if value == "A" or value == "a":
            return(10) 
        if value == "B" or value == "b":
            return(11)
        if value == "C" or value == "c":
            return(12)
        if value == "D" or value == "d":
            return(13)
        if value == "E" or value == "e":
            return(14)
        if value == "F" or value == "f":
            return(15)
    if int(value) in value_list_int:
        return(value)
    else:   
        return("Error: the value is outside of the expected range.")

def int2hex(value):
    value=int(value)
    if 0 <= value <= 15:
        if value <= 9:
            return(value)
        else:
            if value == 10:
                return("A")
            if value == 11:
                return("B")
            if value == 12:
                return("C")
            if value == 13:
                return("D")
            if value == 14:
                return("E")
            if value == 15:
                return("F")
    else:
        return("Error: the value is outside of the expected range.")

def main():
    hex_or_int = int(input("Enter 1 if you want to convert from hexadecimal to decimal or enter 2 if you want to convert from decimal to hexadecimal: "))
    if hex_or_int == 1:
        user_value = (input("Enter a value from 0 to F: "))
        print(hex2int(user_value))

    elif hex_or_int == 2:
        user_value = (input("Enter a value from 0 to 15: "))
        print(int2hex(user_value))

    else:
        print("You didn't enter a correct number.")

if __name__ == "__main__":
    main()



            
