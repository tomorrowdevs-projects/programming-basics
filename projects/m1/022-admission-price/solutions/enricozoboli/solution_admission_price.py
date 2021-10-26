charge = 0

while True:
    age = input("Enter the guest's age: ")
  
    if age == " ":
        print(f"Group's total charge: ${charge:.2f}")
        break
    if 3 <= int(age) <= 12:
        charge += 14.00
    if 13 <= int(age) <= 64:
        charge += 23.00
    if int(age) >= 65:
        charge += 18.00
  
    continue

    