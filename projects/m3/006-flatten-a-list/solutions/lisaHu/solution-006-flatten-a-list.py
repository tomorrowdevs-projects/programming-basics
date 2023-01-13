def flatten_list(data):
    if data == []:
        return data
    elif type(data[0]) == list:
        return flatten_list(data[0]) + flatten_list(data[1:])
    else:
        return [data[0]] + flatten_list(data[1:])

def main():
    l1 = ['a', ['b',['c','d']],'d','e']
    l2 = [[[1,[2,[3]]], 4], 6, 7, [8,[9],10]]
    print(flatten_list(l1))
    print(flatten_list(l2))

if __name__ == '__main__':
    main()
