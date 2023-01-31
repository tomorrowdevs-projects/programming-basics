

def taxi_fare(distance_km):
    base_fare = 4
    add_fare = 0.25
    
    units_per_km = 1000//140
    
    total_fare = distance_km* units_per_km * add_fare
    total_fare += base_fare
    
    return total_fare

def main():
    distance_km = int(input("Insert the DISTANCE in km: "))
    print("Taxi fare: ", taxi_fare(distance_km))
            
if __name__ == '__main__':
    main()




