def encoding(lst):
    if len(lst) == 1:
        return [lst[0],1]
    counter = 1
    for i in range(1,len(lst)):
        if lst[i - 1] == lst[i]:
            counter += 1
        else:
            break
    if encoding(lst[i:])[0] != lst[0]:
        return [lst[0],counter] + encoding(lst[i:])
    else: 
        return [lst[0],counter]
        

def main():
    import random
    test0 = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B","B","A","A","A","A","A","A","B"]
    tests = {
    }
    for k in range(0,random.randint(10,20)):
        tests[k] = []
        for u in range(random.randint(10,20)):
            x = random.randint(65,90)
            for s in range(random.randint(1,10)):
                tests[k].append(chr(x))
    for test in tests:
        print(encoding(tests[test]))
    print(encoding(test0))

if __name__ == '__main__':
    main()