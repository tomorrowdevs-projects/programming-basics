def string_edit_distance(s:str,t:str) -> int:
    '''
    Return the edit distance between two string 's' and 't'.
       
    '''

    def min(a,b,c):
        '''
        return the min between a b and c
        '''
        if a < b and a < c:
            return a
        elif b < a and b < c:
            return b
        else:
            return c
        
    if len(s) == 0:
        return len(t)
    elif len (t) == 0:
        return len(s)
    else:
        cost = 0
        if s[0] != t[0]:
            cost = 1
            d1 = string_edit_distance(s[1:],t) + 1
            d2 = string_edit_distance(s,t[1:]) + 1
            d3 = string_edit_distance(s[1:],t[1:]) + cost
            return min(d1,d2,d3)
        return string_edit_distance(s[1:],t[1:])
        


a = input("First string ")
b = input("Second string ")
print("The edit distance between {} and {} is {}".format(a,b,string_edit_distance(a,b)))