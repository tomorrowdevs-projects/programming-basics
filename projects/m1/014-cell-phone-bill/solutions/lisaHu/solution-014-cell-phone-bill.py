totalMinutes = float(input("Enter total minutes:   "))
totalTextMessages = float(input("Enter total text messages: "))

print()
print("Welcome!")
print("Your bill of this month is:")
print()
print("Base charge:  15.00€")

if totalMinutes > 50:
    additionalMinutes = (totalMinutes - 50) * 0.25
    print("Additional minutes:  " + str("{:.2f}".format(additionalMinutes)) + "€")
else:
    additionalMinutes = 0
if totalTextMessages > 50:
    additionalTextMessages = (totalTextMessages - 50) *0.15
    print("Additional text messages: " + str("{:.2f}".format(additionalTextMessages)) + "€")
else:
    additionalTextMessages = 0
support911 = 0.44
salesTax = (15 + additionalMinutes + additionalTextMessages + support911) * 0.05
totalBill = 15 + additionalMinutes + additionalTextMessages + support911 + salesTax

print("Support to 911 call centers: " + str("{:.2f}".format(support911)) + "€")
print("Sales tax 5%:  " + str("{:.2f}".format(salesTax)) + "€")
print("-----------------------------------------------")
print("Total bill:  " + str("{:.2f}".format(totalBill)) + "€")