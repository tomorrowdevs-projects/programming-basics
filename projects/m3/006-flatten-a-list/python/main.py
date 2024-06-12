def flatten_list(data):
    
    if len(data) == 0:
        return data
    elif type(data[0]) == type(data):
        l1 = flatten_list(data[0])
        l2 = flatten_list(data[1:])
        return l1 +l2
    elif type(data[0]) != type(data):
        l1 = [data[0]]
        l2 = flatten_list(data[1:])
        return l1 + l2

def main():
    data1 = [1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [ 10]]]
    data2 = ['a', ['b'], ['c',['d', 'h']], 'f',['z']]
    print(flatten_list(data1))
    print(flatten_list(data2))

if __name__ == "__main__":
    main()
