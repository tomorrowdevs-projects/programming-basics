

number = int(input("Enter an integer and positive Number: "))
result= ""
q = number

while(q>0):
    r = q % 2   
    result= str(r) + result 
    q = q//2
    
print(f"The number in binary is: {result}")
