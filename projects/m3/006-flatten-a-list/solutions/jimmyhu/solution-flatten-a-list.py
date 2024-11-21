def plainer(lst):
    if len(lst) == 0:
        return []
    if isinstance(lst[0],list):
        l1 =  plainer(lst[0])
        l2 = plainer(lst[1:])
    else:
        l1 = [lst[0]]
        l2 = plainer(lst[1:])
    return l1 + l2

def main():
    test = [1, [2, 3], [4, [5, [6, 7]]], [[[8], 9], [10]]]
    test1 = [2,[[3,[34,[[7]]]],22,[12,44]],11]
    test2 = [[33,11,2,4,5,6,[34,[33,1,7,[33],3,1,[33]],[[1,5,8,[3],99]],0,99]]]
    test3 = ['dog','frog',['bird',['shark'],['duck','pigeon',[['cat']],'tiger']]]
    print(plainer(test))
    print(plainer(test1))
    print(plainer(test2))
    print(plainer(test3))
if __name__ == '__main__':
    main()