test_list = [1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]]


def flatten_list(test):
    if len(test) == 0:
        return test
    
    
    if (type(test[0])) == list:
        fixed_list = flatten_list(test[0]) + flatten_list(test[1:])
        return fixed_list
    
    return test[:1] + flatten_list(test[1:])

print(flatten_list(test_list))

