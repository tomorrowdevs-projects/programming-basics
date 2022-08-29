
#La macchina da il benvenuto e la persona inserisce il n. di bottiglie depositate
print("Welcome to the drink containers deposit and refund!")

quantityBigBottles = int(input("Enter total number of big bottles (holding more than 1 liter): "))
quantitySmallBottles = int(input("Enter total number of small bottles (holding 1 liter or less): "))



#La macchina fa un recap della quantità di bottiglie depositate per tipologia
print("You deposited " + str(quantityBigBottles) + " big bottles and " + str(quantitySmallBottles) + " small bottles.")



#Calcolo rimborso per tipologia + ammontare finale
refundBigBottles = (float(quantityBigBottles) * 0.25)
refundSmallBottles = (float(quantitySmallBottles) * 0.1)
totalRefund = float(refundBigBottles + refundSmallBottles)



#La macchina descrive in dettaglio l'ammontare del rimborso per tipo di bottiglia e del totale restituito
print("You will recieve $" + str(refundBigBottles) + " for " + str(quantityBigBottles) + " big bottles deposited.")
print("You will recieve $" + str(refundSmallBottles) + " for " + str(quantitySmallBottles) + " small bottles deposited.")

print("Your totale refund is $" + str(round(totalRefund, 2)))
