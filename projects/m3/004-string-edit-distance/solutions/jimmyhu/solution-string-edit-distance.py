def edit_distance(s,t):
    # base
    if len(s) == 0:
        return len(t)
    elif len(t) == 0:
        return len(s)
    else:
        cost = 0
    # cost will be 1 only if the last are different
    if s[-1] != t[-1]:
        cost = 1
    d1 = cost + edit_distance(s[:-1],t)
    d2 = cost + edit_distance(s,t[:-1])
    d3 = cost + edit_distance(s[:-1],t[:-1])
    return min([d1,d2,d3])
def main():
    word01 = input('Enter the first word: ').lower()
    word02 = input('Enter the second word: ').lower()
    print(f"the edit distance is: {edit_distance(word01,word02)}")
if __name__ == '__main__':
    main()

