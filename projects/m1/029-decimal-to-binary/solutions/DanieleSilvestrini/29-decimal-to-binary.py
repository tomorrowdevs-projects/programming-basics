# declares a variable where store the result
result = ''

# obtain from user a decimal number to convert in binary
q = int(input('Enter number to convert: '))  

# iterate with a while cycle until the number is equal to 0, dividing by two and storing step by step the reminder as 
# a string in the variable "result"

while q > 0:           
    r = q % 2          
    result = result + (str(r))
    q = q // 2

 # printing the number converted in binary    
print(f'the number you typed converted to binary is {result[::-1]}')   