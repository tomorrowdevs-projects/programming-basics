
#function the returns  the largest possible units between cup tablespoon and teaspoon


def calc(number,unit):
    if unit == 'teaspoon':
        tea_spoon = 1
        table_spoon = tea_spoon * 3                                                                 # 3 teaspoons are 1 tablespoon
        cup = tea_spoon * 48                                                                        # 48 teaspoons are 1 cup
        cup = number // cup
        table_spoon = number // table_spoon % 16
        tea_spoon = number // tea_spoon % 3
        print(f'You need: {cup} cups, {table_spoon} tablespoons, {tea_spoon} teaspoons')

    elif unit == 'tablespoon':
        cup = (number // 16) % 16                                                              #16 tablespoons are 1 cup
        table_spoon = number - (cup * 16)
        print(f'You need: {cup} cups, {table_spoon} tablespoons')
    else:
        print(f'You need: {number} cups')


calc(int(input('Enter an amount...')), input('Enter the measure between cup,tablespoon or teaspoon...'))