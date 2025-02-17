def distance(s1, s2):
    if len(s1) == 0:
        return len(s2)
    
    elif len(s2) == 0:
        return len(s1)
    
    else:
        cost = 0
        if s1[-1] != s2[-1]:
            cost = 1
        d1 = distance(s1[:-1], s2) + 1
        d2 = distance(s2[:-1], s1) + 1
        d3 = distance(s1[:-1], s2[:-1]) + cost
    
    return min(d1, d2, d3)                                                                  

if __name__ == "__main__":
    s1 = input("Enter the first string: ")
    s2 = input("Enter the second string: ")
    result = distance(s1, s2)
    print(f"The editing distance between your strings is: {result}")
