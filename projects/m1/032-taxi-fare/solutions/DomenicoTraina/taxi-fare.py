
distance=float(input("Please enter distance: "))

def calcolate_fare(distance):
    fare=distance/0.140*0.25+4.00
    return fare

tax= calcolate_fare(distance)
print(f"{tax} $ fare must pay")