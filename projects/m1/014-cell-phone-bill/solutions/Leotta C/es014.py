plan = [50, 50] #plan[0] is the number of minutes, plan[1] is the number of messages
minutes = int(input("Enter the number of used minutes: "))
messages = int(input("Enter the number of used messages: "))
police_charge = 0.44

extra_minutes=0
extra_messages=0

if minutes > plan[0]:
    extra_minutes = minutes - plan[0]

if messages > plan[1]:
    extra_messages = messages - plan[1]

minutes_charge = 0.25 * extra_minutes
messages_charge = 0.15 * extra_messages

bill = 15+minutes_charge+messages_charge+police_charge
tax = 0.05*bill
final_bill = bill+tax

resume=[("Base charge",15), ("Extra minutes charge", minutes_charge), ("Extra messages charge", messages_charge),
        ("911 fee", police_charge), ("Tax", tax), ("Total bill amount", final_bill)]

for i in range(0,6):
    print(f"{resume[i][0]}: {resume[i][1]:.2f} €")