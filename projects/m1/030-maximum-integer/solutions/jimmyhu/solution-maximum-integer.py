from random import randint
updates = 0
selected = int(input("Enter a number between 1 and 100: "))
newnumbers = []
while len(newnumbers) < 99:
    newrandom = randint(1, 100)
    if newrandom not in newnumbers:
        newnumbers.append(newrandom)
for number in newnumbers:
    if number > selected:
        selected = number
        print(f"{number} <= Update")
        updates += 1
    else:
        print(number)
print(f"the higher number is: {selected}")
print(f"Number of update: {updates}")