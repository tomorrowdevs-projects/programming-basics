
def order(items):
    total_price = 10.99 + (2.99 * items)
    print(f'Your shipping cost consist in € {total_price}')


ordini = int(input("Please insert total number of items purchased: "))
order(ordini)