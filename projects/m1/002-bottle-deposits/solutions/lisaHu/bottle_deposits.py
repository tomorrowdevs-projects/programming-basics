sopra1L = input("Enter total number of containers holding more than 1 liter: ")
sottoUguale1L = input("Enter total number of containers holding 1 liter or less: ")

totalRefund = (float(sopra1L) * 0.25) + (float(sottoUguale1L) * 0.1)

print("Your totale refund is $" + str(round(totalRefund, 2)))