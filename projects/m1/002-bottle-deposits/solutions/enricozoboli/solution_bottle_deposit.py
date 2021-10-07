print("Welcome! Please insert the number of containers.")

#Ask user for the number of containers
small_containers = int(input("containers that hold 1 litre or less: "))
big_containers = int(input("Containers that hold more than 1 litre: "))

#Calculate the refound
refund = ((big_containers * 0.25) + (small_containers * 0.10))

#Formatting the result with two decimal digits
refund = format(refund, '.2f')


print(f"You're refound is $ {refund}! You're rich!")