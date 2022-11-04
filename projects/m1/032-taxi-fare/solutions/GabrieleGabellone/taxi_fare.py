def taxi_fare (distance_in_km):
    distance_in_m = distance_in_km * 1000
    base_fare = 4
    additional_fare = (distance_in_m * 0.25) / 140 # €0.25 is the additional fare for every 140 meters traveled
    total_fare = base_fare + additional_fare
    return(total_fare)

distance_user = float(input("Enter the distance traveled in kilometers: "))
total_fare = taxi_fare(distance_user)
print("The total fare is €{:.2f}".format(total_fare))