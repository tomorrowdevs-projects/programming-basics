'''
# Cell Phone Bill

A particular cell phone plan includes for € 15.00 a month: 
- 50 minutes of air time 
- 50 text messages    
- Each additional minute of air time costs € 0.25
- Each additional text messages cost € 0.15  
- All cell phone bills include an additional charge of € 0.44 to support 911 call centers

The entire bill (including the 911 charge) is subject to **5 percent sales tax**.  

Write a program that **reads the number of minutes and text messages used in a month** from the user.  
Display:
- Base charge,
- Extra minutes charge (if any),
- Extra text message charge (if any),
- 911 fee, 
- Tax,
- Total bill amount.   

Only display the additional minute and text message charges if the user incurred costs in these categories. 
Ensure that all the charges are displayed **using 2 decimal places**.

Example:   
Input minutes: 500  
Input messages: 55  

Output:  
Base charge: 15.00€  
Extra minutes charge: 112.50€  
Extra messages charge: 0.75€  
911 fee: 0.44€  
Tax: 6.43€  
Total bill amount: 135.12€
'''

# cell phone plan conditions
base_charge = 15.00
minutes_base = 50
sms_base = 50
extra_cost_minute = 0.25
extra_minutes = 0
extra_cost_message = 0.15
extra_sms = 0
call_center_support = 0.44
tax = 0.05
 
# user input
valid_input = False

while valid_input == False:
    minutes_user = int(input("\nHow many minutes you used this month? "))
    text_user = int(input("How many messages did you use this month? "))
    if minutes_user >= 0 or int(minutes_user) == True or text_user >= 0 or int(text_user) == True:
        valid_input = True
    else:
        print("\nInput error, please try again..")


total_bill = base_charge + call_center_support

if minutes_user > 50:
    extra_minutes = minutes_user - minutes_base
    extra_cost_minutes = extra_cost_minute * extra_minutes
else:
    extra_cost_minutes = 0
total_bill += extra_cost_minutes

if text_user > 50:
    extra_sms = text_user - sms_base
    extra_cost_messages = extra_cost_message * extra_sms
else:
    extra_cost_messages = 0
total_bill += extra_cost_messages

taxes = tax*total_bill
total_bill += taxes


def print_bill(extra_minutes, extra_sms, total_bill):
    print(f"base charge: {base_charge:.2f}€")
    if extra_minutes > 0:
        print(f"extra minutes charge: {extra_cost_minutes:.2f}€")
    if extra_sms > 0:
        print(f"extra messages charge: {extra_cost_messages:.2f}€")
    print(f"911 fee: {call_center_support:.2f}€")
    print(f"tax: {taxes:.2f}€")
    print(f"total bill amount: {total_bill:.2f}€")

print_bill(extra_minutes, extra_sms, total_bill)