#BOTTLE DEPOSITS
#In many jurisdictions a small deposit is added to drink containers to encourage people to recycle them. 
# In one particular jurisdiction, drink containers holding one liter or less have a $0.10 deposit, 
# and drink containers holding more than one liter have a $0.25 deposit. Write a program that reads the number of containers of each size from the user. 
# Your program should continue by computing and displaying the refund that will be received for returning those containers. 
# Format the output so that it includes a dollar sign and two digits to the right of the decimal point.
print("Welcome in this deposit!\nAdd all the bottle you can, when you finish, we'll give you some moneyy $_$")

container = 1
deposit = 0

while container != 0:
  container = float(input("how much liter this bottle can contain? (put 0 to finish the program and have some moneyy)"))
  if container != 0:
    if container <= 1:
      deposit = deposit + 0.10
    elif container > 1:
      deposit = deposit + 0.25
  else:
    result = str(format(round(deposit,2),".2f"))
    print("yay! you have"+result+"$!!")