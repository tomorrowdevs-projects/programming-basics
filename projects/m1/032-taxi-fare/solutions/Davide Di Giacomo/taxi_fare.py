import math
taxi_fare=4
taxi_add=0.25
max_road=0.14
def taxi_driver(km):
    if km < max_road:
        print(f"The total fare is: {taxi_fare}€")
    else:
        print(f"The total fare is: {(math.floor(km/max_road))*taxi_add+taxi_fare}€")
        
km = float(input("Insert your road trip in km: "))
taxi_driver(km)