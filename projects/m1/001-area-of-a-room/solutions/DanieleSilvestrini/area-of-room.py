width = input('Insert width of room in meters: ')
lenght = input('Insert lenght of room in meters: ')

wdt = float(width)  # string to floating number
lgt = float(lenght) 


def area(wdt, lgt):
     return round(wdt * lgt, 2) # get a floating number with two digits after coma

print("The area of room in meters: " + str(area(wdt, lgt)))
     

