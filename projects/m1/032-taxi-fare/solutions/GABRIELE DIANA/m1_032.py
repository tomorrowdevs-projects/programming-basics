# Taxi Fare

# In a particular jurisdiction, taxi fares consist of a base fare of €4.00, plus €0.25 for every 140 meters travelled.
#  Write a function that takes the distance travelled (in kilometers) as its only parameter 
# and returns the total fare as its only result. Write a main program that demonstrates the function.

# Documentation

# For this project solution you may use:

# - Functions

# Deadline

# This project requires to be completed in a maximum of **1 hour**


def taxi_fare(kmdist):
    Kmt = 140
    Kfare = 0.25
    base = 4.00
    total = ((kmdist*1000)/Kmt)*Kfare+base
    print("{:.2f}€".format(total))


def main():
    dist = float(input("Please insert distance in km: "))
    taxi_fare(dist)


if __name__ == '__main__':
    main()
