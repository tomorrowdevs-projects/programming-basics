
random_number = input('Pick up one number')
numbers_list = list(random_number)
plus_sign = '+'

#Separo ogni singola cifra con il segno +
x = plus_sign.join(numbers_list)

#Trasformo tutta la lista in numeri interi e li sommo tra di loro
int_numbers = map(int, numbers_list)
sum_numbers = sum(int_numbers)

print(f'{x} = {sum_numbers}')