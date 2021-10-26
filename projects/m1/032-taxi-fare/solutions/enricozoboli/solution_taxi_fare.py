def taxi_fare(distance):
    """
    This function take a distance parameter in kilometers
    and return the total fare in Euros.
    """
    total_fare = (distance / 140) * 0.25 + 4.00
    return f"Total fare: €{total_fare:.2f}"

def main():
    print(taxi_fare(3400))  
    print(taxi_fare(89000))
    print(taxi_fare(280))

if __name__ == "__main__":
    main()
