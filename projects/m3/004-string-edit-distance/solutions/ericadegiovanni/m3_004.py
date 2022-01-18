
def string_edit_distance(s,t):
    """
    Let s and t be the strings
    d1 equal to the edit distance between all characters except the last one in s, and all characters in t, plus 1
    d2 equal to the edit distance between all characters in s, and all haracters except the last one in t, plus 1
    d3 equal to the edit distance between all characters except the last one in s, and all characters except the last one in t, plus cost
    return the edit distance between the two strings (minimum of d1,d2,d3)
    
    """
    # If the length of s is 0 then Return the length of t
    # Else if the length of t is 0 then Return the length of s 
    if len(s) == 0: return len(t)
    elif len(t) == 0: return len(s)
    
    else: 
        cost = 0
        
#       If the last character in s does not equal the last character in t then set cost to 1
        if t[-1] != s[-1]: 
            cost = 1
        d1 = string_edit_distance(s[:-1], t) +1
        d2 = string_edit_distance(s, t[:-1]) +1
        d3 = string_edit_distance(s[:-1], t[:-1]) + cost
        return min(d1, d2, d3)

def main():

    s1 = input('Insert the first string: ')
    s2 = input('Insert the second string: ')
    print(f'The edit distance between {s1} and {s2} is {string_edit_distance(s1,s2)}.')

if __name__ == '__main__' :
    main()