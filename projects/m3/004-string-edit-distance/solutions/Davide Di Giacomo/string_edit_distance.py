#Write a recursive function that computes the edit distance between two strings.

#Let s and t be the strings, If the length of s is 0 then Return the length of t
#Else if the length of t is 0 then Return the length of s. Else Set cost to 0
#If the last character in s does not equal the last character in t then: Set cost to 1
#Set d1 equal to the edit distance between all characters except the last one in s, and all characters in t, plus 1
#Set d2 equal to the edit distance between all characters in s, and all characters except the last one in t, plus 1
#Set d3 equal to the edit distance between all characters except the last onein s,
# and all characters except the last one in t, plus cost Return the minimum of d1, d2 and d3

def edit_distance(s, t):
    #If the length of s/t is 0 then Return the length of t/s
    if len(s)==0: return len(t)
    elif len(t)==0: return len(s)
    else: 
        result=0
        #If the last character in s does not equal the last character in t then: Set cost to 1
        if list(s)[-1]!=list(t)[-1]: result=1
        #use recursion
        d1=edit_distance(s[:-1], t)+1
        d2=edit_distance(s, t[:-1])+1
        d3=edit_distance(s[:-1], t[:-1])+result
        #Return the minimum of d1, d2 and d3
        result=min(d1, d2, d3)
        return result
    
def main():
    s= input("Insert string1: ")
    t= input("Insert string2: ")
    print(f"The edit distance between two strings are: {edit_distance(s, t)}!")
    
main()