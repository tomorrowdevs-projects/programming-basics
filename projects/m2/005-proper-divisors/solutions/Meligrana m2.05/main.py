def divisori_propri(n):
    lista=[]
    for i in range(1,n):
        if n%i==0:
            lista.append(i)
    return lista
if __name__ == '__main__':
    n=int(input("numero "))
    divisori=divisori_propri(n)
    print(f"I divisori propri di {n} sono:")
    s=""
    for i in divisori:
        s+=f"{i}\t"
    print(s)