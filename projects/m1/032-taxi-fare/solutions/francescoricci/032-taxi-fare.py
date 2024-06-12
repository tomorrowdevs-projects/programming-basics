# exercise 032 by francesco ricci

def taxifare(km):

    """
    Thi function return total fare.
    4.00 € is base
    0.25 € is variable based on the km travelled
    km//0.14 convert in km the meter travelled
    """

    return 4+((km//0.14)*0.25)

print(f'Total fare: € {taxifare(2.5)}')
