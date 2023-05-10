import random
def lancio_due_dadi():
    d1=random.randint(1,6)
    d2 = random.randint(1, 6)
    return d1+d2

def stampa(d):
    sk=""
    sv=""
    for k in d.keys():
        sk+="    "+str(k)+"   "
    print(f"{sk}\t",end="")
    print("\n")

    for v in d.values():
        sv+="  "+str(v/10)+"%"+"  "
    print(f"{sv}\t", end="  ")

if __name__ == '__main__':
    d={2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0}
    for i in range(0,1000):
        s=lancio_due_dadi()
        d[s]+=1
    stampa(d)
