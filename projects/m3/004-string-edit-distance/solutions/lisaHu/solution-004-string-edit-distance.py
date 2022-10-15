def edit_distance(s,t):
    if len(s)==0:
        return len(t)
    elif len(t)==0:
        return len(s)
    else:
        cost = 0
        if s[-1] != t[-1]:
            cost = 1
        d1 = edit_distance(s[:-1],t)+1
        d2 = edit_distance(s,t[:-1])+1
        d3 = edit_distance(s[:-1],t[:-1])+cost
    return min(d1, d2, d3)

if __name__ == '__main__':
    s = input('Enter first string: ')
    t = input('Enter second string: ')
    print("The edit distance between  '", s, "'  and  '", t, "'  is: ", edit_distance(s,t))