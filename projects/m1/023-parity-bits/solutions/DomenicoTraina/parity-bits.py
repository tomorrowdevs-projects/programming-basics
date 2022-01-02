
bit_string=[]
index=0
parity_bit=0
high_bit=0

while True:
    bit=input("Enter bit n {} of string: ".format(index+1))
    
    if index==0 and bit==' ':
        break
    
    if bit=='1':
        high_bit+=1
        print(high_bit)
    bit_string.append(bit)
    index+=1
    if index==8:
        print(bit_string)
        if high_bit%2==0:
            parity_bit=1
        else:parity_bit=0
        print("Parity bit è {}".format(parity_bit))
        index=0
print("Fine Programma")  
