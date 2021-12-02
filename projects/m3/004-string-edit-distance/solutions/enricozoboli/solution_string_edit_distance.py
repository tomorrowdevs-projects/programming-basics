def edit_distance(s,t):
    """
    Takes two  string as a parameter and return the
    edit distance wich is a measure of similiraty.
    It is computed with the minimun number of operations
    (insertion, deletion, substitution)needed to transfom 
    one string into the other.
    """
    
    if len(s) < 1 :
        return len(t)
    elif len(t) < 1:
        return len(s)
    else:
        cost = 0
        if s[-1] != t[-1]:
            cost = 1
        d1 = edit_distance(s[:-1], t) + 1
        d2 = edit_distance(s, t[:-1]) + 1
        d3 = edit_distance(s[:-1], t[:-1]) + cost
        return min(d1, d2, d3) 


def main():
    string_1 = input("Enter the first word: ")
    string_2 = input("Enter the second word: ")
    result = edit_distance(string_1, string_2)
    print(f"The edit distance between {string_1} and {string_2} is:"
    f" {result}")

if __name__ == "__main__":
    main()



