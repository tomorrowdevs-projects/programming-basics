print("Bottles 1L or less = 0,10$")
print("Bottles more than 1L = 0,25$")
small = float(input("Here 1L or less "))
big = float(input("Here more than 1L "))
tot = ((small * 0.10) + (big * 0.25))
tot_format = (str(format(tot, ".2f")))
print (tot_format + "$")

