# In many jurisdictions a small deposit is added to drink containers to encourage people to recycle them. In one particular jurisdiction, drink containers holding one liter or less have a $0.10 deposit, and drink containers holding more than one liter have a $0.25 deposit. Write a program that reads the number of containers of each size from the user. Your program should continue by computing and displaying the refund that will be received for returning those containers. Format the output so that it includes a dollar sign and two digits to the right of the decimal point.
# Starting conditions
one_or_less = 0.10
more_than_one = 0.25

#Program
print("\nSTART PROGRAM")
print("------------------")
print("\nHi! Recycle is important!")
print("\nRefunds:")
print("1 lt or less bottles: "+str(format(one_or_less, ".2f"))+"$")
print("More than 1 lt bottles: "+str(more_than_one)+"$")
print("\nHow many one lt or less bottles do you need?")
bottle_one_or_less = int(input())
print("\nHow many more than one lt bottles do you need?")
bottle_more_than_one = int(input())
refund = (bottle_one_or_less * one_or_less) + (bottle_more_than_one * more_than_one)
print("\nGreat! Your refund is...")
print(str(format(refund, ".2f"))+" $")