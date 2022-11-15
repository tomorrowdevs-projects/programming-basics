import math
read_penny = int(input("number of penny read\n"))

# definizione valore monete
penny = 1
nickel = 5
dime = 10
quarter = 25
loonie = 100
toonie = 200

print("total change:")
# inizio con toonie
if read_penny > toonie:
    coin = toonie
    change = read_penny / coin
    next_change = read_penny % coin
    print("toonies: " + str(math.trunc(change)))
else:
    next_change = read_penny

# passo a loonie
coin = loonie
if(next_change >= coin):
    change = next_change / coin
    next_change = next_change % coin
    print("loonies: " + str(math.trunc(change)))

# passo a quarter
coin = quarter
if(next_change >= coin):
    change = next_change / coin
    next_change = next_change % coin
    print("quarters: " + str(math.trunc(change)))

# passo a dime
coin = dime
if(next_change >= coin):
    change = next_change / coin
    next_change = next_change % coin
    print("dimes: " + str(math.trunc(change)))

# passo a nickel
coin = nickel
if(next_change >= coin):
    change = next_change / coin
    next_change = next_change % coin
    print("nickel: " + str(math.trunc(change)))

# passo a penny
coin = penny
if(next_change >= coin):
    change = next_change / coin
    next_change = next_change % coin
    print("penny: " + str(math.trunc(change)))