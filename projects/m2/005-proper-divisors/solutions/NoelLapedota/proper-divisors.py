
def list_Proper_Divisors(q):
    array = []
    for i in range(1,q + 1):
        if q % i == 0:
         array.append(i)
    print(array)
