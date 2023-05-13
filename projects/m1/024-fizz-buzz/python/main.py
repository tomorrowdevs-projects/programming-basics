total_ticket = 0 
while True:
    age_group = input("Enter the birthday of the member of the group (press enter to exit): ")
    if age_group == "":
        break
    age_group = int(age_group)
    # check the age group and assign the ticket price accordingly
    if age_group <= 2:
        ticket = 0
    elif age_group <= 12:
        ticket = 15
    elif age_group <= 64:
        ticket = 23
    else:
        ticket = 18
    total_ticket += ticket
print(f"Total ticket price for the group:, {total_ticket:.2f}$")