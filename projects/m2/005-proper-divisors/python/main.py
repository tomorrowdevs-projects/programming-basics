def divisor(n):
    divisor_list = []
    n = int(n)
    if n > 0:
        for i in range(n):
            if i > 1:
                if n % i == 0:
                    divisor_list.append(i)
        if divisor_list:
            return(print(*divisor_list))
        else:
            return(print("This is a prime number."))
        
def main():
   user_n = input("Enter a value: ")
   divisor(user_n)

if __name__ == "__main__":
    main()

