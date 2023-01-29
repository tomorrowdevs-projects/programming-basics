### 

line = input("Insert a String: ")

i = 0

palindrome = True # I will not write: while(True), because using this trick I can write later: 'if palindrome:'
                  # and I need this expression in order to have the opportunity, later, to print: print(f"{line}: a Palindrome")

while(palindrome):
    
    if i < len(line)/2: 
        line[i] != line[len(line) - i -1]
        i += 1 # here I missed '='
        break
    print(f"{line}: is - Not - a Palindrome")

if palindrome: # in this position to cut off the break: it means easily - if palindrome is True: 
    
    print(f"{line}: is a Palindrome")
    
###