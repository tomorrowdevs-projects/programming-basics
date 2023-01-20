# ask to user number of cents
rest = int(input("Insert number of cents: ")) 

# divide cents by 200 and round it with floor division finding how many toonies to use, if needed
toonies = rest // 200
# find remaining cents
toonies_rest = rest % 200
# print on screen the result
if toonies > 1:
    print (str(toonies) + " toonies")
elif toonies == 1:
    print (str(toonies) + " toonie")

# divide cents by 100 and round it with floor division finding how many loonies to use, if needed
loonies = toonies_rest // 100
# find remaining cents
loonies_rest = toonies_rest % 100
# print on screen the result
if loonies > 1:
    print (str(loonies) + " loonies")
elif loonies == 1:
    print (str(loonies) + " loonie")

# divide cents by 25 and round it with floor division finding how many quarters to use, if needed
quarters = loonies_rest // 25
# find remaining cents
quarters_rest = loonies_rest % 25
# print on screen the result
if quarters > 1:
    print (str(quarters) + " quarters")
elif quarters == 1:
    print (str(quarters) + " quarter")

# divide cents by 10 and round it with floor division finding how many dimes to use, if needed
dimes = quarters_rest // 10
# find remaining cents
dimes_rest = quarters_rest % 10
# print on screen the result
if dimes > 1:
    print(str(dimes) + " dimes")
elif dimes == 1:
    print(str(dimes) + " dime")

# divide cents by 1 and round it with floor division finding how many pennies to use, if needed
pennies = dimes_rest // 1 
# print on screen the result
if pennies > 1:
    print(str(pennies) + " pennies")
elif pennies == 1:
    print(str(pennies) + " penny")
