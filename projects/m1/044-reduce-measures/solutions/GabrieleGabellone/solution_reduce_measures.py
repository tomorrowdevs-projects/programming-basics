# This function takes the number of units as the first parameter and the unit of measure (cup, tablespoon or teaspoon) as the second parameter. 
# Returns a string representing the measure using the largest possible units.
def reduce_measures(units, unit_of_measure):
    cup = tablespoons = teaspoons = 0
    if unit_of_measure.lower() == "tablespoon" or unit_of_measure.lower() == "tablespoons":
        tablespoons = units
    elif unit_of_measure.lower() == "teaspoon" or unit_of_measure.lower() == "teaspoons":
        teaspoons = units
    elif unit_of_measure.lower() == "cup" or unit_of_measure.lower == "cups":
        cup = units
    else: 
        return print("Error! Invalid unit of measure. You can enter cups, spoons, or teaspoons as a unit of measure.")

    # I check if the number of teaspoon is greater than or equal to 3 because 1 tablespoon = 3 teaspoons.
    # If this condition is true, I convert to the largest unit of measure, in this case tablespoons.
    if teaspoons >= 3:
            tablespoons = teaspoons // 3 
            teaspoons = teaspoons % 3
    # I check if the number of tablespoon is greater than or equal to 16 because 1 cup = 16 tablespoons.
    # If this condition is true, I convert to the largest unit of measure, in this case cups.
    if tablespoons >= 16:
            cup = tablespoons // 16
            tablespoons = tablespoons % 16

    return print("{} cup/s, {} tablespoon/s, {} teaspoon/s.".format(cup, tablespoons, teaspoons))

def main():
    number_of_units = int(input("Enter the number of units: "))
    measure = input("Enter the unit of measure: ")
    reduce_measures(number_of_units, measure) 

if __name__ == "__main__":
    main()