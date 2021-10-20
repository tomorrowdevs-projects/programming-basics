charge = 0

while True:
    age = input("Enter the guest's age: ")
    if age != " " and 3 <= int(age) <= 12:
        charge += 14.00
    if age != " " and 13 <= int(age) <= 64:
        charge += 23.00
    if age != " " and int(age) >= 65:
        charge += 18.00
    if age == " ":
        print(f"Group's total charge: ${charge:.2f}")
        break
    continue