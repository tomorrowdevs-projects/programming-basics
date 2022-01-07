q=int(input("Enter number to convert in binary code: "))
binary=[]

while q!=0:
    r=int(q%2)
    q=int(q/2)
    binary+=str(r)

binary.reverse()
print(binary)