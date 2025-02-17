

def taxy_fare(distance):
    if distance <= 4:
        total_taxy_fare = 4
    if distance > 4:
        total_taxy_fare = 4 + (((distance * 1000) / 140) * 0.25)
    print("Total price is: ", total_taxy_fare)

taxy_fare(8)




        
        
