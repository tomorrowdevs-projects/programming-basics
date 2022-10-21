v = int(input('Enter value: '))
d = {'Honda': 1, 'Ferrari': 2, 'Red Bull': 2, 'Alfa Romeo': 2, 'Mercedes': 3, 'Aston Martin': 3}
keys =[]

def reverse_lookup(d, v):
    for k in d:
        if d[k] == v:
            keys.append(k)

    return keys

print(reverse_lookup(d, v))