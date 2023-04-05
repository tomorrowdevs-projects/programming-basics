def flatten_list(data:list) -> list:
    '''
     Converts a list 'data' that may contain multiple levels of nested lists into a list 
     that contains all of the same elements without any nesting
    '''

    if len(data)==0:
        return []
    if type(data[0])==type(list()):
        l1 = flatten_list(data[0])
        l2 = flatten_list(data[1:])
        return l1+l2
    
    if type(data[0])!=type(list()):
        l1 = [data[0]]
        l2 = flatten_list(data[1:])
        return l1+l2
    
sample_nested_list = [1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]]

print("Nested list: {}".format(sample_nested_list))
print("Flatten list: {}".format(flatten_list(sample_nested_list)))
    