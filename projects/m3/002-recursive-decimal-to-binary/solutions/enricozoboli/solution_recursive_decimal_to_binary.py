def binary(n, result=""):
    if n == 0 or n == 1:
        result += str(n)
        return result[::-1]
    else :
        result += str(n % 2)
        return binary(n//2, result)

def main():
    while True:
        n = int(input("Enter a number to convert(q for exit): "))
        if n == "q":
            break
        elif n < 0:
            print("Please enter a positive number")
            continue
        else:
            bin_res = binary(n,result="")
            print(f"{n} in binary is: {bin_res}")
            continue

if __name__ == "__main__":
    main()