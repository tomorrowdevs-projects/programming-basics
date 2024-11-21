teaspoon = int(input("Inster number of teaspoons:"))

def reduce(t):
    tablespoon = int(t / 3)
    cups = int(tablespoon / 16)
    teaspoons = t % 3
    rest_tablespoon = tablespoon % 16

    return print(f"{cups} cup(s), {rest_tablespoon} tablespoon(s), {teaspoons}")

reduce(teaspoon)