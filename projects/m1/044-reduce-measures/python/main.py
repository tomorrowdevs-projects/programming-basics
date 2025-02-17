def reduce_measures(unit_number, unit_of_measure):
    volume_value = ['cup', 'tablespoon', 'teaspoon']
    if unit_of_measure not in volume_value:
        print('You have to enter a valid unit of volume from cup, tablespoon or teaspoon')
        return

    # imperial volume value in teaspoons
    teaspoon = 1
    tablespoon = 3
    cup = 48

    if unit_of_measure == 'cup':
        print('Cup is the largest unit of measure for this program')

    if unit_of_measure.lower() == 'tablespoon':
        cups = int((unit_number * 3) // cup)
        print(cups)
        tablespoons = int(((unit_number * 3) % cup) // 3)
        teaspoons = int((unit_number * 3 % cup) % tablespoon)

    if unit_of_measure.lower() == 'teaspoon':
        cups = int(unit_number // cup)
        tablespoons = int((unit_number % cup) // tablespoon)
        teaspoons = int((unit_number % cup) % tablespoon)

    print(f'{cups} cups, {tablespoons} tablespoons, {teaspoons} teaspoons')


if __name__ == '__main__':
    print("Hello user this program will convert a unit of measure (from cup, tablespoon or teaspoon) into the largest possible units.")
    unit_number = int(input("How much units you want to convert?"))
    unit_of_measure = input("What units of measure have you inserted (cup, tablespoon or teaspoon)?")
    
    reduce_measures(unit_number, unit_of_measure)