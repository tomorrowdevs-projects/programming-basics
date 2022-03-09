q=int(input('Enter the number please \n'))
def list_Proper_Divisors(q):
    array = []
    for i in range(1,q):
        if q % i == 0:
         array.append(i)
    print(array)
