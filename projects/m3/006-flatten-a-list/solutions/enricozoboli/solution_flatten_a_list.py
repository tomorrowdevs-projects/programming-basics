def flatten_list(l):
    """
    Take a list of nested list as a parameter and return a 
    flatten list. An empty list is the base case. The function 
    recursively slice the nested lists until it hit the base case
    and then concatenate backward the base case with the items
    individually sliced before. If the first item isn't a list
    the function slice the element and flatten the remaining 
    nested lists. 
    """
    if not l:
        return l
    if type(l[0]) == list:
        return flatten_list(l[0]) + flatten_list(l[1:])
    else:
       return [l[0]] + flatten_list(l[1:])



x = [[1,[2, 3]], 4]
print(flatten_list(x))
x = [['a',['b', 'c']], 'd']
print(flatten_list(x))
x = [[1,[2, 3]], 4, [5, 6, [7]], [[[9, 10],11]]]
print(flatten_list(x))
x = [['abc',['efg',['hij'], [['klm']]]], 'nop']
print(flatten_list(x))
