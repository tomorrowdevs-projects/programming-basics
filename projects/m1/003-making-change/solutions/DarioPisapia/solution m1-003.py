#Making change
cents = int(input("How many cents?\n"))

value_chart = {
    "toonie_value": 200,
    "loonie_value": 100,
    "quarter_value": 25,
    "dime_value": 10,
    "nickel_value": 5,
    "penny_value": 1
}

change = []
while cents > 0:
    for value in value_chart:
        coin = cents // value_chart[value]
        change.append(coin)
        cents -= coin * value_chart[value]

print(f"Your change is: {change[0]} toonies, {change[1]} loonies, {change[2]} quarters, {change[3]} dimes, {change[4]} nikels and {change[5]} pennies")
