
distance = int(input('Enter the distance traveled (km): '))
distance *= 1000

def taxi_fare(distance):
    total_fare = '%.2f' %((distance / 140) * 0.25 + 4)
    print(total_fare)

print('Your taxi fare is: $', end='')
taxi_fare(distance)


