small_bottle = int(input("how much small bottle ( < 1.0l) do you want recycle? "))
big_bottle = int(input("how much big bottle ( > 1.0l) di you want recycle? "))
print("You want recycle " + str(small_bottle) + " small battles and " + str(big_bottle) + " big bottles")
deposit_small = small_bottle * 0.10
deposit_big = big_bottle * 0.25
deposit_tot = deposit_big + deposit_small
print("You will recive " + "%.2f" % deposit_small + " $ for the small bottles and " + "%.2f" % deposit_big + " $ for the big bottles")
print("you will recive a total of: " "%.2f" % deposit_tot + " $")
