minutes = int(input("insert total minutes used in month\n"))
text_messages = int(input("insert total text messages used in month\n"))
plan = 15
call_center_911 = 0.44
Total_bills = plan + call_center_911

if minutes > 50:
    add_minutes = minutes - 50
    add_minute_cost = 0.25
    total_add_minutes_cost = round(add_minutes * add_minute_cost, 2)
    Total_bills += total_add_minutes_cost
if text_messages > 50:
    add_text_messages = text_messages - 50
    add_text_message_cost = 0.15
    total_add_text_messages_cost = round(add_text_messages * add_text_message_cost, 2)
    Total_bills += total_add_text_messages_cost
tax = round(Total_bills / 100 * 5, 2)
Total_bills += tax

print("The base charge is: " + str(plan) + "$")
if minutes > 50:
    print("Additional minutes charge: " + str(total_add_minutes_cost) + "$")
if text_messages > 50:
    print("Additional text messages charge: " + str(total_add_text_messages_cost) + "$")
print("911 fee: " + str(call_center_911) + "$")
print("5% tax: " + str(tax) + "$")
print("Total bill amount: " + str(Total_bills) + "$")