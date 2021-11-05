def reduce(units, measures):
    measures = measures.lower()
    if measures == "cup" or measures == "cups":
        cup = units
        return print(f"{cup} cup/s.")
    elif measures == "tablespoons" or measures == "tablespoon":
        cup = int(units) // 16
        tablespoon = int(units) % 16
        return print(f"{cup} cup/s, {tablespoon} tablespoon/s.")
    elif measures == "teaspoons" or measures == "teaspoon":
        cup = (int(units) // 3) // 16
        tablespoon = (int(units) // 3) % 16
        teaspoon = int(units) % 3
        return print(f"{cup} cup/s, {tablespoon} tablespoon/s,"
        f" {teaspoon} teaspoon/s.")

if __name__ == "__main__":
    reduce( 59, "teaspoons")
    reduce( 6, "cups")
    reduce( 18, "tablespoon")
    reduce( 1289, "teaspoon")
    reduce( 1, "teaspoon")
    reduce( 15, "tablespoon")
    
   
    