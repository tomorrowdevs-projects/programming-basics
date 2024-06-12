def editDistance(str1, str2):
      
    # If first string is empty, the only option is to
    # insert all characters of second string into first
    if len(str1) == 0:
        return len(str2)
  
    # If second string is empty, the only option is to
    # remove all characters of first string
    if len(str2) == 0:
        return len(str1)
  
    # If last characters of two strings are same, nothing
    # much to do. Ignore last characters and get count for
    # remaining strings.
    if str1[len(str1) - 1] == str2[len(str2) - 1]:
        return editDistance(str1, str2, len(str1), len(str2))
  
    # If last characters are not same, consider all three
    # operations on last character of first string, recursively
    # compute minimum cost for all three operations and take
    # minimum of three values.
    return 1 + min(editDistance(str1, str2, len(str1), len(str2) - 1),    # Insert
                   editDistance(str1, str2, len(str1) - 1, len(str2)),    # Remove
                   editDistance(str1, str2, len(str1) - 1, len(str2) - 1)    # Replace
                   )
  
  

str1 = ""
str2 = ""
print (editDistance(str1, str2))