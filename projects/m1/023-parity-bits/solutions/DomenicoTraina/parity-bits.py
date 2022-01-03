
bit_string=[]
index=0
parity_bit=0
high_bit=0

while True:
    bit=str(input("Enter bit n {} of string: ".format(index+1)))
    if index==0 and bit==' ':
        break
    bit_string.append(bit)
    index+=1
    if index==8:
        high_bit=bit_string.count("1")
        print(bit_string)
        if high_bit%2==0:
            parity_bit=1
        else:parity_bit=0
        print("Parity bit è {}".format(parity_bit))
        index=0
        del bit_string[0:8]
print("Fine Programma")  
