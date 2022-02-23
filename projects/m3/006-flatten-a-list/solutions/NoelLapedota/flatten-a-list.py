p_list = [1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]]
def flatten(data):
    # base case
    if len(data) == 0:
        return data
    # recursive Fn    
    elif type(data[0]) == list:
        l1 = data[0]
        l2 = flatten(data[1:])
        return l1 + l2
    elif type(data[0]) != list: 
       l1 = [data[0]] + flatten(data[1:])

print(flatten(p_list))        
