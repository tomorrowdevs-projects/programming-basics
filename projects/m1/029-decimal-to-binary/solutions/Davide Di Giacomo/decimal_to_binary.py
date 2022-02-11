base_2=[]
base_10=int(input("Insert a integer number:"))
while base_10>0:
    binary_1=base_10%2
    base_2.append(binary_1)
    base_10=int(base_10/2)
else:
    print("Your decimal number in binary system is:")
    base=(list(reversed(base_2)))
    for i in range(len(base)):
        print(base[i], end ="")