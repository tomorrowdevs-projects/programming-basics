def total_the_values():
    n = input("Enter a value (blank line to quit): ")
    if n.strip() == "":
        return 0.0
    return float(n) + total_the_values()

print("The sum of the entered values is", total_the_values())