def next_p(previous_p: int, lista: list) -> int:
    '''
    Returns the next element starting from 'previous_p' other than 0 in the list 'lista'
    '''
    index = previous_p + 1
    while index < len(lista):
        if lista[index] != 0:
            return index
        else:
            index += 1
    return index

limit = int(input("Insert limit of the sequence "))

numbers = []

#create a list of number between 0 and limit
for i in range(0,limit+1):
    numbers.append(i)
numbers[1] = 0
p = 2

while p < limit:

    for index in range(p+1,limit+1):
        if numbers[index] != 0 and numbers[index] % p  == 0:
            numbers[index]=0

    p = next_p(p,numbers)

for i in numbers:
    if i != 0:
        print(i,end=" ")