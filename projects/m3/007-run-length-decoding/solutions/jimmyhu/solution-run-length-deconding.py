def run_lenght(lst):
    if len(lst) == 0:
        return []
    if lst[1] > 1:
        let = [lst[0]]
        lst[1] -= 1
        rest = run_lenght(lst)
    else:
        let = [lst[0]]
        rest = run_lenght(lst[2:])
    return let + rest
def main():
    import random
    test0 = ["A",12,"B",4,"A",6,"B",1]
    test1 = ['a',12,'c',2,'n',6,'k',1,'i',14,'l',8]
    print(run_lenght(test0))
    print(run_lenght(test1))
if __name__ == '__main__':
    main()