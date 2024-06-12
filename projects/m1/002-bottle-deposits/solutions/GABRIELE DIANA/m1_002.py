# In many jurisdictions a small deposit is added to drink containers to encourage people to recycle them.
# In one particular jurisdiction, drink containers holding one liter or less have a $0.10 deposit,
# and drink containers holding more than one liter have a $0.25 deposit.
# Write a program that reads the number of containers of each size from the user.
# Your program should continue by computing and displaying the refund
# that will be received for returning those containers.
# Format the output so that it includes a dollar sign and two digits to the right of the decimal point.

a = int(input("Insert number of small containers: "))
b = int(input("Insert number of large containers: "))
a1 = round(float(a * 0.10), 2)
b1 = round(float(b * 0.25), 2)
print(str("%.2f" %(a1+b1)) + "$")