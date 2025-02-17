def sieve(er):
    numbers = []
    prime = []
    for n in range(2, er + 1):
        numbers.append(n)
    p =2
    while p < numbers[len(numbers) - 1]:
        for num in numbers:
            if num != p and num % p == 0:
                numbers.remove(num)
        p = numbers[numbers.index(p) + 1]
    for number in numbers:
        prime.append(number)
        print(prime)
        

def main():
    user_num = int(input("Enter a number"))
    result = sieve(user_num)
    print(result)



if __name__ == "__main__":
    main()