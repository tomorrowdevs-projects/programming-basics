import divisors

def perfect_number(num:int) -> bool:
    '''
    Return True if 'num' is a perfect number. Return False if not.
    '''

    all_proper_div = divisors.proper_divisors(num)

    sum = 0
    for number in all_proper_div:
        sum += number

    if sum == num:
        return True
    else:
        return False

print("Perfect number between 1 and 10000")    
for i in range(1,10001):
    if perfect_number(i):
        print(i)
