
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
while True:
    try:
        minutes_user = int(input("\nHow many minutes you used this month? "))
        text_user = int(input("How many messages did you use this month? "))
    except ValueError:
        print("\nInput error, please try again..")
        continue

    if minutes_user >= 0 or text_user >= 0:
        break
    else:
        print("\nSorry, you insert negative value, please try again..")
        

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