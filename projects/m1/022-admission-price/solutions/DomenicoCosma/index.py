
total = 0

while True:
    age = input('How old are you?(blank to quite')
    if age == '':
         break
    age = int(age)
    if age > 2 and age < 13:
       total += 14
    elif age >= 65:
       total += 18
    elif age < 2:
        total = total
    else:
       total += 23

print(f'Your total amount is {(total):.2f}')