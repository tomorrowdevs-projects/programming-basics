base_fare = 4
distance = float(input('Enter the distance in kilometers: '))
ride_fee = 0.25
def final_price(base, distance, fee):
    metri = distance * 1000
    print(metri)
    final = base + ((metri / 140) * fee)
    return int(final)
print(f"The total cost is: {final_price(base_fare, distance, ride_fee)}$")