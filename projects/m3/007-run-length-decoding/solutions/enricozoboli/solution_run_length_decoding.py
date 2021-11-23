def run_len_decode(l):
    """
    Takes a run lenght encoded list and return a decoded list.
    
    Parameter:
        l: run lenght encoded list such as ['A', 3, 'B', 2]
    Return:
        list: run lenght decoded list such as ['A', 'A', 'A', 'B', 'B']
    """
    
    if not l:
        return l
    else:
        return list(l[0] * l[1]) + run_len_decode(l[2:])

l = ["A",12,"B",4,"A",6,"B",1]
print(run_len_decode(l))
l = ["A",1,"B",7,"A",13,"B",5]
print(run_len_decode(l))
l = ["A",5,"B",2,"A",5,"B",2]
print(run_len_decode(l))