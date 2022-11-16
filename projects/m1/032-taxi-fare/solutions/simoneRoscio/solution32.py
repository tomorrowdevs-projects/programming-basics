"""In a particular jurisdiction, taxi fares consist of a base fare of €4.00, plus €0.25 for every 140 meters travelled. 
Write a function that takes the distance travelled (in kilometers) as its only parameter and returns the total fare as its only result. 
Write a main program that demonstrates the function.
"""


kilometers = int(input('How much km have u travelled? '))

def taxy_fare(distance):
    base_fare = 4.00
    fare_for_km = distance * 1000 / 140
    fee = round(base_fare + fare_for_km, 2)
    
    print(f'You have to pay a fare of {fee}€')

taxy_fare(kilometers)