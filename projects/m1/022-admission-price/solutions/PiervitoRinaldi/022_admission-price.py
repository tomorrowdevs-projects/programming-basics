total_price = 0

while True:
    age = input('Enter age: ')
    if age == '':
        break
    age = int(age)
    if age <= 2:
        total_price = total_price + 0
    elif age >= 3 and age <= 12:
        total_price = total_price + 14
    elif age > 12 and age < 65:
        total_price = total_price + 23 
    elif age >= 65:
        total_price = total_price + 18


print('The admission price, for the entire group, amount: ', '%.2f' %(total_price))