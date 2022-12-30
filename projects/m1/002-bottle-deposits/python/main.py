Smallcontainers = int(input("How many containers of 1 liter or less do you have? "))
Bigconteiners = int(input("How many containers of more than 1 liter do you have? "))
Refund = Smallcontainers*0.1 + Bigconteiners*0.25
print("The amount of your refund is ","%.2f"%Refund,"$")
