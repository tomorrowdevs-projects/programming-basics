def reduce_measures(value, unit_of_measure):
    value = int(value)
    if unit_of_measure == 'teaspoon':
        cup = value // 48
        tablespoon = (value % 48) // 3
        teaspoon = (value % 48) % 3
        result = str(cup) + ' cups, ' + str(tablespoon) + ' tablespoon, ' + str(teaspoon) + ' teaspoon.'
       
    elif unit_of_measure == 'tablespoon':
        cup = value // 16
        tablespoon = (value % 16) 
        result = str(cup) + ' cups, ' + str(tablespoon) + ' tablespoon.'

    elif unit_of_measure == 'cup':
        cup = value
        result = str(cup) + ' cups.'

    else:
        result = 'ERROR: Enter correct unit of measure!'

    return result

def main():
    unit_of_measure = input('Enter unit of meausure: ')
    value = input('Enter value: ')
    print(reduce_measures(value, unit_of_measure))

