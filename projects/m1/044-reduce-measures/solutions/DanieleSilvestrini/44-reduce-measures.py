# defines a functions that, gived a certain number of units in cups, tablespoons, or teaspoons return the equivalent with the largest unit of measure possibile. The function accept 2 value, the number of units and the unit of measure

def reduce_measures(units, unit_of_measure):
# check if unit of measure is 'cup', if true it will return it as result in a string
    if unit_of_measure == 'cup':
        return f'{units} cup/s'
# check if the unit of measure is 'tablespoon', if yes convert the quantity in the largest units possible and return a string with the result
    elif unit_of_measure == 'tablespoon':
        cups = units // 16
        tablespoon = (units % 16) // 1
        if cups != 0 and tablespoon != 0:
            return f'{cups} cup/s,{tablespoon} tablespoon/s'
        if cups == 0 and tablespoon != 0:
            return f'{tablespoon} tablespoon/s'
#check if the unit of measure is 'teaspoon', if yes convert the quantity in the largest units possible and return a string with the result
    elif unit_of_measure == 'teaspoon':
        cups = units // 48
        tablespoon = (units % 48) // 3
        teaspoon = ((units % 48) % 3) // 1
        if cups != 0 and tablespoon != 0 and teaspoon != 0:
            return f'{cups} cup/s, {tablespoon} tablespoon/s,{teaspoon} teaspoon/s'
        elif cups == 0 and tablespoon != 0 and teaspoon != 0:
            return f'{tablespoon} tablespoon/s, {teaspoon} teaspoon/s'
        elif cups == 0 and tablespoon == 0 and teaspoon != 0:
            return f'{teaspoon} teaspoon/s'   

print(reduce_measures(59,'teaspoon'))   

