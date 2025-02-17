
def to_teaspoons(number, unit):
    unit.lower()
    if "tablespoon" in unit:
        return number*3
    elif "cup" in unit:
        return number*48
    else:
        return number

def conversion(number, unit):
    teaspoons = to_teaspoons(number, unit)

    cups = teaspoons//48
    teaspoons %= 48
    tablespoons = teaspoons//3
    teaspoons %= 3

    text_cup = "cup" if cups == 1 else "cups"
    text_tablespoon = "tablespoon" if tablespoons == 1 else "tablespoons"
    text_teaspoon = "teaspoon" if teaspoons == 1 else "teaspoons"

    return f"{cups} {text_cup}, {tablespoons} {text_tablespoon}, {teaspoons} {text_teaspoon}"

if __name__ == "__main__":
    number, unit = input("Enter here the number and the unit separated by comma: ").split(",")
    print(conversion(int(number), unit))
       