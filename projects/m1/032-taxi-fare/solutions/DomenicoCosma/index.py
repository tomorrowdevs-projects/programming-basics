
#Request to the user to enter how many km wants to travel.
#I know that €0.25 is the price for 140m
# I wrote a function to calcolate how much is for 1 km and the total amount for the race in km plus 4 euro base


def tariff(km):
    one_km = (1000/140)*0.25
    total = (one_km*km)+4
    print(f'You total amount is €{(total):.2f}')
    return total



tariff(int(input('How many Km do you wanna travel?')))