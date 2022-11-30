"""A particular zoo determines the price of admission based on the age of the guest. 
Guests 2 years of age and less are admitted without charge. 
Children between 3 and 12 years of age cost $14.00. Seniors aged 65 years and over cost $18.00. 
Admission for all other guests is $23.00.
Create a program that begins by reading the ages of all of the guests in a group from the user, with one age entered on each line. 
The user will enter a blank line to indicate that there are no more guests in the group. 
Then your program should display the admission cost for the group with an appropriate message. 
The cost should be displayed using two decimal places."""

print('Hello USER tell me the age of guest')

guest_age = 0

ticket_list = []


while True:
    guest_age = (input('Insert the age of the guest (black to exit): '))

    # Condition to break while cycle
    if guest_age == '':
        break
    
    # Evaluete the ticket charge and append to ticket_list
    if int(guest_age) <= 2:
        pass
    elif 3 <= int(guest_age) <= 12:
        ticket_price = 14.00
        ticket_list.append(ticket_price)
    elif int(guest_age) >= 65:
        ticket_price = 18.00
        ticket_list.append(ticket_price)
    else:
        ticket_price = 23.00
        ticket_list.append(ticket_price)

# Sum the tickets and dysplay the group charge
group_charge = sum(ticket_list)

print(f'the charge for the group is ${group_charge}')