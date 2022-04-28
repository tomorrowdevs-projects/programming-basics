#Bottle deposit

small_containers = int(input("How many smaller than one liter containers do you have?\n"))
big_containers = int(input("And bigger?\n"))

refund = small_containers * 0.1 + big_containers * 0.25

print(f"The refund is: {refund:.2f}$")
