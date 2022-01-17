# makes an empty list where store the result
result = []
# declares a variable  where store the number to check asked and declare a variable where store 2 as factor
n = (int(input('Insert number greater than 2: '))) 
factor = 2

# check if the number is less than two and eventually display an error message
if n < factor:     
    n = (int(input('Error, insert number grater than 2: ')))

# iterates until factor is less or equal to number
while n >= factor: 
# declares a conditional that if number is evenly divisible to factor adds to "result" the factor, riassigns to "n" the value obtained by dividing number with  the same factor, else add 1 to factor and goes on. Ends printing result.  
    if n % factor == 0:
        result.append(factor)
        n = n // factor
    else:
        factor = factor + 1
print(result)               
        