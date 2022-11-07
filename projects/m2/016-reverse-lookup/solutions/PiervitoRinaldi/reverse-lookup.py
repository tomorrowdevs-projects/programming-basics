def reverse_lookup(d, v):   # d = dictionary, v = value
    keys =[]
    for k in d:
        if d[k] == v:
            keys.append(k)

    return keys

if __name__ == "__main__":
    v = int(input('Enter value: '))
    d = {'Honda': 1, 'Ferrari': 2, 'Red Bull': 2, 'Alfa Romeo': 2, 'Mercedes': 3, 'Aston Martin': 3}
    
    print(reverse_lookup(d, v))