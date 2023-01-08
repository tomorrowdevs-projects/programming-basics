# the exercise already expressed that 16 tablespoon = 1 cup and 59 teaspoons can = 1 cup, 3 tablespoons, 2 teaspoons
# cup = z, tablespoons = x, teaspoons = y >>> 59y = z + 3x +2y >>> 57y = z + 3x >>> we already know that 16x = 1z >>> 57y = 16x + 3x
# 57y = 19x >>> x = 3y >>> 1 tablespoon = 3 teaspoons, 1 cup = 48 teaspoons.

def reduce_measures(number,measure):
    number=int(number)
    if measure == "cup":
        return("It's already the largest possible unit.")

    elif measure == "tablespoon":
        if number >= 16:
            cup = number // 16
            tablespoon = number % 16
            return("{} cup/cups, {} tablespoon/tablespoons.") .format(cup,tablespoon)
        else:
            return("It's already the largest possible unit.") .format(number)
    
    elif measure == "teaspoon":
        if number >= 48:
            cup = number // 48
            tablespoon = (number % 48) // 3
            teaspoon = number - (cup*48 + tablespoon*3)
            return("{} cup/cups, {} tablespoon/tablespoons, {} teaspoon/teaspoons.") .format(cup,tablespoon,teaspoon)
        elif 3 <= number < 48:
            tablespoon = number // 3
            teaspoon = number % 3
            return("{} tablespoon/tablespoons, {} teaspoon/teaspoons.") .format(tablespoon,teaspoon)
        else:
            return("It's already the largest possible unit.")
    
    else:
        return("Enter a correct unit of measure ('cup', 'tablespoon', 'teaspoon').")

def main():
    print("This program will represent the largest possible units to reduce measures.")
    user_unit = input("Enter number of units: ")
    user_measure = input("Enter unit of measure ('cup', 'tablespoon', 'teaspoon'): ")
    print(reduce_measures(user_unit,user_measure))

if __name__ == "__main__":
    main()
    





            

