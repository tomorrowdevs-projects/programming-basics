def eratosthenes(limit):
    prime = []
    for n in range(2, limit+1):
        prime.append(n)
    for n in prime:
        if n == 0:
            pass
        else:
            for i in range(n+1,len(prime)+1):
                if i % n == 0:
                    prime[i-2] = 0

    z = prime.count(0)
    while z > 0:
        prime.remove(0)
        z -= 1
    prime.pop()
    return prime
    
if __name__ == "__main__":
    limit = int(input("Enter the limit:\n"))
    print(eratosthenes(limit))
