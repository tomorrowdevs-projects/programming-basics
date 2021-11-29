# This program shows the full price and the discounted price of some items in a shop

initialFullPrice = 4.95
increaseNewFullPrice = 5

while initialFullPrice <= 24.95 :
    print(f'The full price of the item is  {initialFullPrice :.2f} €')

    discountedPrice = initialFullPrice / 100 * 60
    discountedPrice = initialFullPrice - discountedPrice
    print(f'The discounted price at 60% is {discountedPrice :.2f} €')

    initialFullPrice = initialFullPrice + increaseNewFullPrice

    print('---------------------------') 