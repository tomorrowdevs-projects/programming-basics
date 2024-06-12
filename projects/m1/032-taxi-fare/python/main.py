def total_fare_taxi_travel(kilometeres_distance):
    fare = 4
    meters_distance = kilometeres_distance * 1000
    fare += (meters_distance // 140)*0.25
    return fare

distance = float(input("How many kilometeres have you travelled? "))
print("The total fare for this travel is {} $".format(total_fare_taxi_travel(distance)))
