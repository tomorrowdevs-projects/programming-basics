#A particular cell phone plan includes 50 minutes of air time and 50 text messages for € 15.00 a month. 
#Each additional minute of air time costs € 0.25, while additional text messages cost € 0.15 each. 
#All cell phone bills include an additional charge of € 0.44 to support 911 call centers, and the entire 
#bill (including the 911 charge) is subject to 5 percent sales tax.
#Write a program that reads the number of minutes and text messages used in a month from the user. 
#Display the base charge, additional minutes charge (if any),
#additional text message charge (if any), the 911 fee, tax and total bill amount. 
#Only display the additional minute and text message charges if the user incurred costs in these 
#categories. 
#Ensure that all of the charges are displayed using 2 decimal places.

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