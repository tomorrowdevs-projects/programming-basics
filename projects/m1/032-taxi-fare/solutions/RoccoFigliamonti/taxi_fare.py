"""# Taxi Fare

In a particular jurisdiction, taxi fares consist of a base fare of €4.00, plus €0.25 for every 140 meters travelled. Write a function that takes the distance travelled (in kilometers) as its only parameter and returns the total fare as its only result. Write a main program that demonstrates the function.
"""

from types import MethodDescriptorType


def taxi_fares(distance):
    """
    This function take a distance parameter in meters and return the total fare.
    """
    base_fare = 4
    additional_fare = 0.25
    meters = 140
    
    distance = distance//meters
    total_fare = base_fare + distance*additional_fare
    return total_fare

print(f"{taxi_fares(2000)} $")