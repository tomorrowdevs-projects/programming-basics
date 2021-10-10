# A particular cell phone plan includes 50 minutes of air time and 50 text messages for € 15.00 a month. Each additional minute of air time costs € 0.25, while additional text messages cost € 0.15 each. All cell phone bills include an additional charge of € 0.44 to support 911 call centers, and the entire bill (including the 911 charge) is subject to 5 percent sales tax. Write a program that reads the number of minutes and text messages used in a month from the user. Display the base charge, additional minutes charge (if any), additional text message charge (if any), the 911 fee, tax and total bill amount. Only display the additional minute and text message charges if the user incurred costs in these categories. Ensure that all of the charges are displayed using 2 decimal places.

max_air_time = 50
max_mex = 50
charge_base = 15.00
charge_911 = 0.44
taxes = charge_base / 100 * 5
charge_base_and_taxes = charge_base + taxes + charge_911

print("\nYour base charge is: " + str(format(charge_base, ".2f")) + "€")
print("For 911 call you have a plus of: " + str(charge_911) + "€")
print("You also pay for taxes: " + str(taxes) + "€")

print("\nHow many minutes of air time did you spend this month?")
minutes = float(input())
print("\nAnd how many messages?")
messages = int(input())
if minutes > max_air_time:
    plus_minutes = (minutes - max_air_time) * 0.25
    print("\nYou have a plus of " + str(format((plus_minutes), ".2f")) + "€ for the air time")
if messages > max_mex:
    plus_message = (messages - max_mex) * 0.15
    print("\nYou have a plus of " + str(format((plus_message), ".2f")) + "€ for the messages")
if minutes <= max_air_time and messages <= max_mex:
    plus_minutes = 0
    plus_message = 0
    print("\nYou have no plus.")

total = charge_base_and_taxes + plus_minutes + plus_message

print("\nYour total bill amount to: " + str(format(total, ".2f")) + "€")