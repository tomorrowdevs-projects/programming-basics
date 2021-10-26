# In a particular jurisdiction, taxi fares consist of a base fare of €4.00, plus €0.25 for every 140 meters travelled.
# Write a function that takes the distance travelled (in kilometers)
# as its only parameter and returns the total fare as its only result. Write a main program that demonstrates the function.

print("\nEnter the kilometers of your travel")
km = float(input())

def total_fare(distance):
    distance_m = distance * 1000
    fare = format(4.00 + ((distance_m / 140) * 0.25), ".2f")
    return print(fare + "$")


total_fare(km)