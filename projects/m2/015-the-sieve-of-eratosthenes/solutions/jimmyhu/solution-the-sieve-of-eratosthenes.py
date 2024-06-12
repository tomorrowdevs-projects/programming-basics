def eratosthenes(lim):
    p = 2
    prime = [k for k in range(1,lim+1,p)]
    prime.insert(0,2)
    prime.remove(1)
    while p < (prime[len(prime)-1]/2):
        for i in range(p,lim+1,p):
            if i in prime and i != p:
                prime.remove(i)
        p = prime[prime.index(p)+1]
    return prime
def main():
    print(eratosthenes(100000))
if __name__ == '__main__':
    main()