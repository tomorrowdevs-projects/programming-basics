def remove_outliers(values, n):
    result_values = values[:]
    result_values.sort()
    del result_values[0:n]
    del result_values[-n: len(result_values)]
    return result_values, values


def main():
    values = []
    while True:
        num = input("Enter a number(q for exit): ")
        if num == "q":
            n_out = int(input("Outliers number: "))
            if len(values) <= n_out + 2:
                print("Too few numbers.")
                continue
            else:
                break
        else:
            values.append(int(num))
            continue
    result, entered_values = remove_outliers(values, n_out)
    return print(f"{result}\n{entered_values}")
    

if __name__ == "__main__":
    main()
    







