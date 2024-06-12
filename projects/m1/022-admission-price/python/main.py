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