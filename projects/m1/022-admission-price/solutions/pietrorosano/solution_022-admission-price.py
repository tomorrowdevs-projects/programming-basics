# A particular zoo determines the price of admission based on the age of the guest.
# Guests 2 years of age and less are admitted without charge.
# Children between 3 and 12 years of age cost $14.00.
# Seniors aged 65 years and over cost $18.00.
# Admission for all other guests is $23.00.
# Create a program that begins by reading the ages of all of the guests in a group from the user,
# with one age entered on each line. The user will enter a blank line to indicate that there are no more guests in the group.
# Then your program should display the admission cost for the group with an appropriate message.
# The cost should be displayed using two decimal places.

# Starting conditions
guests = []
prices = []

while True:
    print("\nEnter the age of the guest. For ends enter 0")
    guest_age = input()
    guests.append(guest_age)

    if int(guest_age) <= 2:
        prices.append(0)
    elif int(guest_age) > 2 and int(guest_age) <= 12:
        prices.append(14)
    elif int(guest_age) > 12 and int(guest_age) < 65:
        prices.append(23)
    else:
        prices.append(18)

    if int(guest_age) == 0:
        sum_prices = sum(prices)
        guests.remove(guest_age)
        print("\nYou are " + str(len(guests)) + " guests. The total cost is: " + str(format(sum_prices, ".2f")) + "$")
        break