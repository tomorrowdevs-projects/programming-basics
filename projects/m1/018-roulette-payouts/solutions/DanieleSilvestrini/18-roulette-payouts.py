import random

list_number = [random.randint(0, 36), '00']

number = random.choices(list_number, weights=[36, 1])

if number[0] % 2 == 0 and 0 < number[0] <= 18 and not number[0] == 0 and not number[0] == '00':
    print(f'Pay {number[0]}\nPay red\nPay even\nPay 1 to 18')
elif number[0] == '00' or number[0] == 0:
    print(f'Pay {number[0]}')
elif not number[0] % 2 == 0 and 18 < number[0] <= 36 and not number[0] == 0 and not number[0] == '00':
    print(f'Pay {number[0]}\nPay black\nPay Odd\nPay 19 to 36')