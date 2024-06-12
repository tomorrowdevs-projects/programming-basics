def reduce_measures(num, unit):
    #create variables outside of loop that will store results
    teaspoons = 0
    tablespoons = 0
    cups = 0
    while True:
        #if the unit is teaspoons, it will calculate how many cups/tablespoons are there based on quantity
        if unit == 'teaspoons':
            if num >= 48:
                cups = num // 48
                num = num % 48
            elif 3 <= num < 48:
                tablespoons = num // 3
                num = num % 3
            else:
                teaspoons = num
                break
        #if the unit is teaspoons, it will calculate how many cups are there based on quantity
        elif unit == 'tablespoons':
            if num >= 16:
                cups = num // 16
                num = num % 16
            else:
                tablespoons = num
                break
        #cups are the maximun unit, no need to convert
        else:
            cups = num
            break
    return print(str(cups) + ' cup/s, ' + str(tablespoons) + ' tablespoon/s and ' + str(teaspoons) + ' teaspoon/s.')

#get input from user and call of function
if __name__ == "__main__":
    num = int(input('Enter the quantity you want to convert:           '))
    unit = input('Enter the measure (cups, tablespoons, teaspoons):  ')
    reduce_measures(num, unit)