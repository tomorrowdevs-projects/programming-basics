def decimal_to_binary(num: int) -> str:

    if num == 0:
        return "0"
    else:
        return decimal_to_binary(num//2) + str(num % 2)
    


while True:

    print("Insert a non negative decimal number")
    num = int(input())
    if num < 0:
        print("Error. You insert a negative number")
    else:
        break


print("{} in binary is {}".format(num,decimal_to_binary(num)))

