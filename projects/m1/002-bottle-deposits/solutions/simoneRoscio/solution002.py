# In many jurisdictions a small deposit is added to drink containers to encourage people to recycle them. 
# In one particular jurisdiction, drink containers holding one liter or less have a $0.10 deposit, 
# and drink containers holding more than one liter have a $0.25 deposit. 
# Write a program that reads the number of containers of each size from the user. 
# Your program should continue by computing and displaying the refund that will be received for returning those containers. 
# Format the output so that it includes a dollar sign and two digits to the right of the decimal point.


print("Hello USER this program will compute the amount of refund if you return the liquid containers")

# ask USER the number of containers that he'll can return
smallerContainers = int(input("How much small containers do you have?"))
biggerContainers = int(input("How much big containers do u have?"))

# evaluate the USER refund 
sContainerRefund = smallerContainers * 0.10
bContainerRefund = biggerContainers * 0.25

# display the USER refund amount
print("You will receive a refund of", end=' ')
print(round(sContainerRefund, 2), '$', sep='', end=' ') 
print("for the smaller containers and", end=' ')
print(round(bContainerRefund, 2), '$', sep='',end=' ')
print("for the bigger")