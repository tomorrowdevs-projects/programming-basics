def write_number(integer):
    number19 = {"0":"zero", "1":"one", "2":"two", "3":"three", "4":"four", "5":"five", "6":"six", "7":"seven",
    "8":"eight", "9":"nine","10":"ten", "11":"eleven", "12":"twelve", "13":"thirteen", "14":"fourteen",
    "15":"fifteen", "16":"sixteen", "17":"seventeen", "18":"eighteen", "19":"nineteen"}

    numberxx = {"2":"twenty", "3":"thirty", "4":"forty", "5":"fifty", "6":"sixty", "7":"seventy", "8":"eighty", "9":"ninety"}

    result = ""

    if  0 <= int(integer) <= 999:
        if int(integer) < 20:
            result += number19[integer]

        if 20 <= int(integer) <= 99:
            if integer[1] != "0":
                result += numberxx[integer[0]] + " " +number19[integer[1]]
            else:
                result += numberxx[integer[0]]

        if int(integer) >= 100:
            result += number19[integer[0]] + " hundred "
            if integer[1] != "0":
                result += numberxx[integer[1]] + " "
            if integer[2] != "0":
                result += number19[integer[2]]
    else:
        return("The integer must be a number between 0 and 999.")

    return(result)

def main():
    user_int = input("Enter an integer between 0 and 999: ")
    print(write_number(user_int))

if __name__ == "__main__":
    main()





    
            

