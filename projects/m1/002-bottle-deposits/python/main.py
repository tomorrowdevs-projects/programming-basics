# calculate the refund for the bottles

LOWER_DEPOSIT = 0.10

HIGHER_DEPOSIT = 0.25

# number of bottles divided by size

lower = int(input("Bottles 1L or less "))

higher= int(input("Bottles greater than 1L "))

# change bottles/money

refund = (lower * LOWER_DEPOSIT) + (higher * HIGHER_DEPOSIT)

#show the refound

print("total refound $%.2f." % refund)