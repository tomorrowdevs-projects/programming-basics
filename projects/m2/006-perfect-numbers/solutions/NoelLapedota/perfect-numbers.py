
def perfect_n(n):
    l = []
    for i in range(1, n):
         if n % i == 0:
             l.append(i)
             if n == sum(l):
                return True
                
    return False   
               

           
        
                   
perfect_n(28)

