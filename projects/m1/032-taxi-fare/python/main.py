kilometers = int(input('How much km have u travelled? '))

def taxy_fare(distance):
    base_fare = 4.00
    fare_for_km = distance * 1000 / 140
    fee = round(base_fare + fare_for_km, 2)
    
    print(f'You have to pay a fare of {fee}€')

taxy_fare(kilometers)