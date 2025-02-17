def sum_values() -> float:

    num = (input("Insert a num . Blank to quit "))
    if num == "":
        return 0.0
    else:
        return float(num) + sum_values()
    

print("Total is: ",sum_values())