def reduce_measure(units, measure):
    # convert everything to teaspoons
    teaspoons = 0
    if measure == "cup":
        teaspoons = units * 48
    elif measure == "tablespoon":
        teaspoons = units * 3
    elif measure == "teaspoon":
        teaspoons = units
    
    # compute the largest possible units
    cups = teaspoons // 48
    teaspoons = teaspoons % 48
    tablespoons = teaspoons // 3
    teaspoons = teaspoons % 3
    
    # build the resulting string
    result = ""
    if cups > 0:
        result += str(cups) + " cup"
        if cups > 1:
            result += "s"
        if tablespoons > 0 or teaspoons > 0:
            result += ", "
    if tablespoons > 0:
        result += str(tablespoons) + " tablespoon"
        if tablespoons > 1:
            result += "s"
        if teaspoons > 0:
            result += ", "
    if teaspoons > 0:
        result += str(teaspoons) + " teaspoon"
        if teaspoons > 1:
            result += "s"
    
    return result

print(reduce_measure(59, "teaspoon"))  # "1 cup, 3 tablespoons, 2 teaspoons"
print(reduce_measure(16, "tablespoon"))  # "1/2 cup"
print(reduce_measure(3, "cup"))  # "3 cups"