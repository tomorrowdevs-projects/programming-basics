def centrastringa(s,w):
    if(len(s)>w):
        return s
    k=(w-len(s))//2
    spazi=" "*k
    print (spazi+s)

if __name__=='__main__':
    s=input("Stringa: ")
    w=int(input("Larghezza in caratteri: "))
    centrastringa(s,w)
