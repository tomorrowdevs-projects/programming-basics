def build_dict(s):
    d = dict()
    for c in s.lower() :
       if ord(c) in range(97, 123):
            d[c] = d.get(c, 0)
            d[c] += 1
    return d
   
def compare_dict(d_1, d_2):
    if len(d_1) != len(d_2) or not d_1:
            return False
    for k in d_1.keys():
        if k not in d_2 :
            return False
        if d_1[k] != d_2[k]:
            return False
    return True

if __name__ == "__main__":
    s_1 = input("Enter the first word: ")
    s_2 = input("Enter the second word: ")
    
    if compare_dict(build_dict(s_1), build_dict(s_2)):
        print(f"'{s_1}' and '{s_2}' are anagrams")         
    else:
         print(f"'{s_1}' and '{s_2}' aren't anagrams") 


