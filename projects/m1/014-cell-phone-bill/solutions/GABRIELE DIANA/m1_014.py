# Cell Phone Bill

# A particular cell phone plan includes 50 minutes of air time and 50 text messages for € 15.00 a month. 
# Each additional minute of air time costs € 0.25, while additional text messages cost € 0.15 each. 
# All cell phone bills include an additional charge of € 0.44 to support 911 call centers, 
# and the entire bill (including the 911 charge) is subject to 5 percent sales tax.
# Write a program that reads the number of minutes and text messages used in a month from the user. 
# Display the base charge, additional minutes charge (if any),
# additional text message charge (if any), the 911 fee, tax and total bill amount. 
# Only display the additional minute and text message charges if the user incurred costs in these categories. 
# Ensure that all of the charges are displayed using 2 decimal places.

# Documentation

# For this project solution you may use:

# - Variables, expressions, statements
# - Conditionals and recursion
# - Iteration
# - Strings

# Deadline

# This project requires to be completed in a maximum of **2 hours**

# I proceed to declare constants and variables - such as user input - as my hypothesis.
K_MINUTES = 50
K_TEXT = 50
FIX = 15
ADD_MIN = 0.25
ADD_TEXT = 0.15
FIX_911 = 0.44
TAX_PERC = 5/100
minutes = int(input("Please insert monthly minutes' usage: "))
text = int(input("Please insert monthly texts' usage: "))

# I create 3 functions.
# The first one to calculate charge for additional minutes,
# the second one to calculate charge for additional texts,
# the last one to calculate taxes on total bill.
def delta_min(minutes):
    if minutes > K_MINUTES:
       return (minutes - K_MINUTES) * ADD_MIN
    else:
        return 0


def delta_text(text):
    if text > K_TEXT:
        return (text - K_TEXT) * ADD_TEXT
    else:
        return 0


def tax(a, b):
    return (FIX + FIX_911 + b + a) * TAX_PERC

# I assign the result of my first 2 functions to a variable, in order to make the execution simpler and quicker.
m = delta_min(minutes)
t = delta_text(text)

# I make additional charge for minutes and texts subject to a conditional > 0 in order not to print out
# on display if < 0.
print("Base Charge: {:.2f}$".format(FIX))
if minutes > K_MINUTES:
    print("Additional minutes' charge: {:.2f}$".format(m))
if text > K_TEXT:
    print("Additional texts' charge: {:.2f}$".format(t))
print("911 fee: {:.2f}$".format(FIX_911))
print("Tax: {:.2f}$".format(tax(m, t)))
print("Total bill: {:.2f}$".format(FIX + m + t + FIX_911 + tax(m, t)))
