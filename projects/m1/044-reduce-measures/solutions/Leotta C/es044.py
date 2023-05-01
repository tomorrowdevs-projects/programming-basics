def conversion(units, measure):
    unit_of_measure = {"teaspoon": 0, "tablespoon": 1, "cup": 2}
    quantity = [0, 0, 0]
    quantity[unit_of_measure[measure]] += units
    limits = [3, 16]
    for i in range(2):
        if quantity[i] >= limits[i]:
            quantity[i+1] += quantity[i] // limits[i]
            quantity[i] = quantity[i] % limits[i]
    return quantity

if __name__ == '__main__':
    u = int(input("Enter the number of units: "))
    m = input("Enter the unit of measure (teaspoon/tablespoon/cup): ")
    print(f"{u} {m} are equal to {conversion(u,m)[0]} teaspoons, {conversion(u,m)[1]} tablespoons and {conversion(u,m)[2]} cups.")


