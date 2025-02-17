"""# Admission Price

A particular zoo determines the price of admission based on the age of the guest.
Guests 2 years of age and less are admitted without charge.
Children between 3 and 12 years of age cost $14.00.
Seniors aged 65 years and over cost $18.00.
Admission for all other guests is $23.00.

Create a program that begins by reading the ages of all of the guests
in a group from the user, with one age entered on each line.
The user will enter a blank line to indicate that there are no more guests in the group.

Then your program should display the admission cost for the group with an appropriate message.
The cost should be displayed using two decimal places.
"""

baby_cost = 0.00
children_cost = 14.00
senior_cost = 18.00
standard_cost = 23.00

#take the guest ages
guest_age = []
while True:
    guest = (input("Insert the age (blank to stop): "))
    guest_age.append(guest)
    if guest == "":
        guest_age.pop(-1)
        break
#print(guest_age)


#transform guest ages into int
guest_age_int=[]
for el in guest_age:
    guest_age_int.append(int(el))
#print(guest_age_int)


#count how many guests for each age category
baby_num = 0
children_num = 0
senior_num = 0
standard_num = 0
for el in guest_age_int:
    if el<=2:
        baby_num = baby_num + 1
    elif 2<el<=12:
        children_num += 1
    elif el>=65:
        senior_num += 1
    else:
        standard_num += 1

total_cost = round(baby_num*baby_cost + children_num*children_cost \
                   + senior_num*senior_cost + standard_num*standard_cost,2)

print(f"Baby number: {baby_num}; Cost: {round(baby_num*baby_cost,2):.2f} $")
print(f"Children number: {children_num}; Cost: {round(children_num*children_cost,2):.2f} $")
print(f"Senior number: {senior_num}; Cost: {round(senior_num*senior_cost,2):.2f} $")
print(f"Adult number: {standard_num}; Cost: {round(standard_num*standard_cost,2):.2f} $")
print(f"Total Cost: {round(total_cost,2):.2f} $")