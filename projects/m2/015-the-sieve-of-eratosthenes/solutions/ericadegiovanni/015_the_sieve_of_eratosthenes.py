
limit = 100
p = 2
#list of numbers from 2 to n
elements = list(i for i in range(2, limit + 1))

while p < limit:
  
    # find multiples of p 
    for multiple in range(0, limit +1, p):
        
        # replace them with 0 in the list of numbers
        if multiple in elements and multiple != p:
            elements[elements.index(multiple)] = 0
    
    # change p parameter
    p +=1
    for n in elements:
        if 0 < n > p: 
            p = n
            break

print(f'The prime numbers till {limit} are:') 
for number in elements:
    if number != 0:
        print(number, end=' ')




