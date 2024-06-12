"""Use the following algorithm:
    Let s and t be the strings 
        If the length of s is 0 then
            Return the length of t
        Else if the length of t is 0 then
            Return the length of s 

        Else 
        Set cost to 0
        If the last character in s does not equal the last character in t then
            Set cost to 1
            Set d1 equal to the edit distance between all characters except the last one
    in s, and all characters in t, plus 1
            Set d2 equal to the edit distance between all characters in s, and all
    characters except the last one in t, plus 1
            Set d3 equal to the edit distance between all characters except the last one
    in s, and all characters except the last one in t, plus cost Return the minimum of d1, d2 and d3

"""

def edit_distance(s, t):
    if len(s) == 0:
        return len(t)
    elif len(t) == 0:
        return len(s)
    else:
        cost = 0
        if s[-1] != t[-1]:
            cost = 1
        d1 = edit_distance(s[:-1],t)+1
        d2 = edit_distance(s,t[:-1])+1
        d3 = edit_distance(s[:-1],t[:-1]) + cost
        return min(d1,d2,d3)

print(edit_distance("kitten","sitting"))


