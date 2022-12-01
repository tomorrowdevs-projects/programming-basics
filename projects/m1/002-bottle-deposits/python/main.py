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