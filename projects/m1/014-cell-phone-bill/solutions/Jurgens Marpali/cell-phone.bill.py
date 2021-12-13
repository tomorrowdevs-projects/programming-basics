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
user_minutes = int(input('Please write how many minutes you spent on your phone talking: '))
user_msg = int(input('Please write how many messages you sent: '))
main_fee = 15.00
emergency_fee = 0.44
extra_minutes = (user_minutes - 50) * 0.25
extra_msg = (user_msg - 50) * 0.15
tax = main_fee * 5 /100
base_fee = main_fee + tax + emergency_fee

print("Your Base charge is 15$")
print("Our 911 fee is 0.44$")
print("We apply a 5% tax on our charges")
if user_minutes >50:
    print("Your charge is " + "%.2f" % (base_fee + extra_minutes) + "$")
elif user_msg >50:
    print("Your charge is " + "%.2f" % (base_fee + extra_msg) + "$")
else:
    print("Your charge is " + "%.2f" % base_fee + "$")