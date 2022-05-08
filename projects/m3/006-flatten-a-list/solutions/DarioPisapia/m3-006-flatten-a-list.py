def flattener(data):
    if len(data) == 0:
        return []

    if type(data[0]) is list:
        l1 = flattener(data[0])
        l2 = flattener(data[1:])
        return l1 + l2
    
    if type(data[0]) is not list:
        l1 = [data[0]]
        l2 = flattener(data[1:])
        return l1 + l2
    
if __name__ == "__main__":
    input("Press ENTER flatten the list ")
    data = [1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]]
    print(flattener(data))
