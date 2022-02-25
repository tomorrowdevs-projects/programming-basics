#fuction to define perfect number
def perfect_number(number):
    proper_divisors=[1]
    #find proper divisors of a  number
    for i in range(2, number):
        divisor=number%i
        if divisor == 0:
            proper_divisors.append(i)
    #find perfect number
    if sum(proper_divisors)==number: return True
    else: return False

#search perfect numbers in range 1-10000  
def main():
    for i in range (1, 10001):
        if perfect_number(i) is True:
            print(i)
     
main()