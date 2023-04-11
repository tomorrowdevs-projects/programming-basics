def price(age):
    if age <= 2:
        return 0
    if age <= 12:
        return 14
    if age <= 64:
        return 23
    return 18


age = 0
amount = 0

while age != "":
    age = int(age)
    amount += price(age)
    age = input("Enter the guest's age: ")

print(f"The total amount is ${amount:.2f}.")
