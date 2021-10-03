n = input()
import re
if not re.match("^[0-9]+$", n):
    print("This is not allowed!")
    quit()
if len(n) > 4:
    print("Error! More than four digits")
    quit()
elif len(n) < 4:
    print("Error! Less than four digits")
    quit()

num = [int(d) for d in n]
number = sum(num)
            
print(number)