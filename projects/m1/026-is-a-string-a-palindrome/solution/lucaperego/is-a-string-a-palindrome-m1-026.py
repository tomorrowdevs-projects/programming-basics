###

line = input("insert a String: ")

i = 0

palindrome = True # I will not write: while(True), because using this trick I can write later: 'if palindrome:'
                  # and I need this expression in order to have the opportunity, later, to print: print(f"{line}: a Palindrome")

while(palindrome):
    
    if i < len(line):
        line[i] != line[len(line)/2 - i -1]
        i += 1
        break
    print(f"{line}: Not a Palindrome")

if palindrome: # in this position to cut off the break: it means easily - if palindrome is True: 
    
    print(f"{line}: a Palindrome")
    
     