number=int(input("Enter Number to scompose: "))
factor=2

if number<2:
    print("Error! please restart and insert number >=2")

while factor<=number:
    if number%factor==0:
        print(factor)
        number=number/factor
    else:
        factor+=1
