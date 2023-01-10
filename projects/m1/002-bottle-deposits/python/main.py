small_containers = int(input("How many containers of 1 liter or less do you have? "))
big_containers = int(input("How many containers of more than 1 liter do you have? "))
refund = small_containers*0.1 + big_containers*0.25
print("The amount of your refund is ","%.2f"%refund,"$")
