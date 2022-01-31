hexadecimal=str.upper(input("Enter hexadecimal value: "))

hexalist=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
rev_hexadecimal=''.join(reversed(hexadecimal))

def hex2int (rev_hexadecimal):
    decimal=0
    for i in range(len(rev_hexadecimal)):
        for j in range (len(hexalist)):
            if rev_hexadecimal[i]==hexalist[j]:
                decimal=decimal + (j*(16**i))  
                break
    print(f"Decimal conversion: {decimal}")

hex2int (rev_hexadecimal)
#----------------------------------------------------------------------------------------

q=int(input("Enter number to convert in exadecimal code: "))

def int2hex (q):
    r=[]
    while (True):
        r.append(int(q%16))
        q=int(q/16)
        if q==0: 
            break
    r.reverse()

    for i in range(len(r)):
        if r[i]==10:r[i]="A"
        if r[i]==11:r[i]="B"
        if r[i]==12:r[i]="C"
        if r[i]==13:r[i]="D"
        if r[i]==14:r[i]="E"
        if r[i]==15:r[i]="F"
        else: r[i]=str(r[i])   #converto interi in stringa per poi fare il join
            
    print("".join(r))

int2hex(q)