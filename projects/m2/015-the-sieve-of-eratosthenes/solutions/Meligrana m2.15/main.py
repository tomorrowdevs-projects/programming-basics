if __name__ == '__main__':
    limite=int(input("Estremo superiore "))
    numeri=[]
    for i in range(2,limite+1):
        numeri.append(i)
    print(numeri)
    i=0
    while(i<len(numeri)):
        p=numeri[i]
        for k in numeri[i+1:]:
            if p!=0 and k%p==0:
                a=numeri.index(k)
                numeri.pop(a)
                numeri.insert(a,0)
        i+=1
    print(numeri)
