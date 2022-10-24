def eratosthenes(p, r):
    numbers_list = []
    for n in range(p, r):
        numbers_list.append(n)

    multiples = []
    while p < r:
        
        if p in numbers_list:
            for i in range(len(numbers_list)):
                x = numbers_list[i] * p
                if x <= r:      # Questa condizione evita di calcolare multipli che non servono
                    multiples.append(x)
                else:
                    break
            for i in range(len(numbers_list)):
                if numbers_list[i] in multiples:
                    numbers_list[i] = 0
                    
            p += 1
        else: 
            p += 1

    return numbers_list

# Filtro la lista ricavata, togliendo gli zeri

numbers_list = eratosthenes(2,201)

def my_func(n):
    if n == 0:
        return False
    else:
        return True

prime_numbers = filter(my_func, numbers_list)

for n in prime_numbers:
    print(n)
