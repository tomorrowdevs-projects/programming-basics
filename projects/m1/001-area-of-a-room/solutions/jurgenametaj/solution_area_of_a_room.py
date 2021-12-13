# FINDS THE AREA OF A ROOM GIVEN WIDTH AND LENGTH

def input_number(side):
    while True:
        try:
            x = float(input('Enter the '+side+'in meters: '))
            return x
        except:
            print('I need a number, try again')


def area(wdt, lgt):
    return round(wdt * lgt, 2)

print("I can calculate the area of a room using length and width.")

A=area(input_number('lenght'),input_number('width'))
print("The area is:", A,"m².")