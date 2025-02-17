def reduce_measures(units: int,unit_of_measure: str) -> str:
    '''
    Return a string representing the measure using the largest possible units.

    Args:
    units: int. Number of unit of measure
    unit_of_measure: (cup,tablespoon,teaspoon)
    '''

    unit_of_measure = unit_of_measure.lower()
    cup = 0
    tablespoon = 0
    teaspoon = 0

    a_cup_in_tablespoons = 16
    a_cup_in_teaspoons = 48
    a_tablespoon_in_teaspoons = 3

    if unit_of_measure == "cup": return "{} {}".format(units,unit_of_measure)
    elif unit_of_measure == "tablespoon":
        cup = units // a_cup_in_tablespoons
        tablespoon = units % a_cup_in_tablespoons
    elif unit_of_measure == "teaspoon":
        cup = units // a_cup_in_teaspoons
        units = units % a_cup_in_teaspoons
        tablespoon = units // a_tablespoon_in_teaspoons
        teaspoon = units % a_tablespoon_in_teaspoons
    else:
        return "Input Error. Unit of measure must be 'cup' or 'tablespoon' or 'teaspoon'"

    output_string =""

    if teaspoon != 0:
        output_string += "{} teaspoons ".format(teaspoon)
    if tablespoon != 0:
        output_string = "{} tablespoons ".format(tablespoon) + output_string
    if cup != 0:
        output_string = "{} cups ".format(cup) + output_string

    return output_string

units_of_measure = input("Unit of measure cup,tablespoon,teaspoon ")
units = int(input("Quantity: "))

print(reduce_measures(units,units_of_measure))

        

