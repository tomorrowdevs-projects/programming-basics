"""
In particular, your function must:
• Capitalize the first non-space character in the string,
• Capitalize the firstnon-space character after a period, exclamation mark or question mark, and
• Capitalize a lowercase “i” if it is preceded by a space and followed by a space, period, exclamation mark, question mark or apostrophe.

For example, if the function is provided with the string “what time do i have to be there? what’s the address? this time i’ll try to be on time!” 
then it should return the string 

“What time do I have to be there? What’s the address? This time I’ll try to be on time!”. 
"""

def capitalize_string(s):
    s=list(s) #convert the string in a list of single chars
    new_s = [s[0].capitalize()] #capitalize the first char 
    for i in range(1,len(s)):
        if s[i] == "i" and s[i-1] == " " and (s[i+1]==" " or s[i+1]=="'" or s[i+1]=="." or s[i+1]=="?" or s[i+1]=="!"): #capitalize the i
            new_s.append(s[i].capitalize())
        elif (s[i-2] == "." or s[i-2] == "!" or s[i-2] == "?") and s[i-1] == " ": #capitalize the first char after period,ex mark or q mark and a space
            new_s.append(s[i].capitalize())
        else:
            new_s.append(s[i])
    sentence = "".join([item for item in new_s])
    return sentence


phrase = "what time do i have to be there? what's the address? this time i'll try to be on time!"
print(capitalize_string(phrase))

