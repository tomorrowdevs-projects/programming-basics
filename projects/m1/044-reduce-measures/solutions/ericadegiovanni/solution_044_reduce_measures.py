# MEASURES
teaspoon_in_cap = 48 
teaspoon_in_tablespoon = 3 
teaspoon = 1 

# take a number of units as its first parameter, 
# take the unit of measure (cup, tablespoon or teaspoon) as its second parameter. 
# return a string representing the measure using the largest possible units as its only result. 

def reduce_measure(units, measure):

    tot_cups = 0
    tot_tablespoon = 0
    tot_teaspoon = 0
    
    # convert n of cup or tablespoon in teaspoon
    if measure == 'tablespoon':
        units *= 3
    elif measure == 'cup':
        units *= 48

    tot_cups = units // teaspoon_in_cap
    units  %= teaspoon_in_cap
    tot_tablespoon = units // teaspoon_in_tablespoon
    tot_teaspoon = units % teaspoon_in_tablespoon

    print(f'{tot_cups} cup, {tot_tablespoon} tablespoons, {tot_teaspoon} teaspoons.')
           
def main():
    measure = input('Insert a measure between cup, tablespoon and teaspoon: ')
    if measure == 'cup' or measure == 'tablespoon' or measure == 'teaspoon':
        units = int(input('Insert a unit: '))
        reduce_measure(units, measure)
    else:
        print('You entred a wrong measure.')
        return

if __name__ == '__main__':
    main()

