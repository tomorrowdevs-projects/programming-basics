

def total_valutes():
    
    q = input('enter the number\n')
    if q == '': 
        return 0.0
    else:
        result = float(q) + total_valutes()
print(total_valutes())      
