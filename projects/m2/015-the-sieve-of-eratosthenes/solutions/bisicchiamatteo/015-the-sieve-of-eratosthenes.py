def eratosthenes(n):
    multiples = []
    for i in range(2, n+1):
        if i not in multiples:
            print (i)
            for j in range(i*i, n+1, i):
                multiples.append(j)


        

def main():
    eratosthenes(1000000)

if __name__ == "__main__":
    main()