def eratosthenes(limit):
    number_list = []
    prime_list = []
    for num in range(2,limit+1):
        number_list.append(num)
    p = 2
        
    for num in range(p+p,limit+1,p):
        if num in number_list:
            number_list[number_list.index(num)] = 0
        p += 1    
    for num in number_list:
        if num != 0:
            prime_list.append(num)


    return prime_list

    

def main():
    print("This program will find all of the prime numbers between 2 and the entered limit.")
    user_limit = int(input("Enter a number limit: "))
    print(eratosthenes(user_limit))

if __name__ == "__main__":
    main()