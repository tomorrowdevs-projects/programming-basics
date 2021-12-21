user_km = float(input("enter the km(or meters by typing 0.etc) done: "))

def taxi(distance):
    if distance < 0.14:
        cost = 4
    else:
        cost = (4 + 0.25 * (distance / 0.14))
    return print("The total cost is ", "%.2f" % (cost), "$")
    
taxi(user_km)