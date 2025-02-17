def edit_distance(s,t):
    if len(s) == 0:
        return len(t)
    elif len(t) == 0:
        return len(s)
    else:
        cost = 0
        if s[-1] != t[-1]:
            cost = 1
        d1 = edit_distance(s[:-1],t) + 1
        d2 = edit_distance(s,t[:-1]) + 1
        d3 = edit_distance(s[:-1],t[:-1]) + cost
        return min(d1,d2,d3)                        #it will return the minimum between d1, d2 and d3

def main():
    print("Enter two strings and this program will calculate the edit distance between them.")
    user_s = input("Enter the first string: ")
    user_t = input("Enter the second string: ")
    print(("The edit distance is {}.") .format(edit_distance(user_s,user_t)))

if __name__ == "__main__":
    main()