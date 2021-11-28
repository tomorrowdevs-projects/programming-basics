baseCase = {"": 0, "M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1}

    
def codexRoman(s):
    
    if s in baseCase:
          return baseCase[s]
 
    
    first, second = map(codexRoman, s[:2])
    print(first, second)
    
    if first < second:
        return second - first + codexRoman(s[2:])
    else:
        return first + codexRoman(s[1:])  


