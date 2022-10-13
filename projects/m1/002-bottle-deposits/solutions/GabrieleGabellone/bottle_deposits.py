#BOTTLE DEPOSITS
refund = 0
bottles = int(input("How many bottles do you have? "))
while bottles != 0:
    capacity = float (input("Enter the bottle capacity in liters: "))
    if capacity <= 1:
        refund = refund + 0.10
    else:
        refund = refund + 0.25
    bottles -= 1
    print("Current refund: $", refund)
    print("Bottles left: ", bottles)
    print("")
     
refund_round = round(refund, 2)
print("The full refund is: $", refund_round)