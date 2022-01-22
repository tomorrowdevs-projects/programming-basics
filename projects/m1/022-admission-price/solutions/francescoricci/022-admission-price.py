# exercise 020 by francesco Ricci

count = 0
total_price = 0

while True:
    count += 1
    age = input(f'Insert age to guest {count} [blank line to exit] : ')
    if not age:
        break

    age= int(age)
    if age < 3:
        total_price += 0
    elif age <13 >2:
        total_price += 14.00
    elif age >64:
        total_price += 18.00
    else:
        total_price += 23.00

print(f'Groups total charge: ${total_price:.2f}')
