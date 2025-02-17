guest_age = None
price = 0
total_price = 0
while True:
    guest_age = input("Enter the age (blank line to quit): ")
    if guest_age == "": 
        break
   
    guest_age = int(guest_age)
    if guest_age <= 2:
        price = 0
    elif guest_age >= 3 and guest_age <= 12:
        price = 14
        total_price += price
    elif guest_age >= 65:
        price = 18
        total_price += 18
    else:
        price = 23
        total_price += 23

print(f"Cost is {total_price:.2f}")