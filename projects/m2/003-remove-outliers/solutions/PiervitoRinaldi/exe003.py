def remove_outliers(values, n):
    min_and_max = []
    count = 0

    while count < n:
        min_value = min(values)
        max_value = max(values)
        min_and_max.append(min_value)
        min_and_max.append(max_value)

        values.remove(min_value)
        values.remove(max_value)
        count += 1
    
    return min_and_max

def main():
    values = []
    
    while True:
        value = int(input('Enter value (enter 0 to quit): '))
        if value != 0:
            values.append(value)
            continue
        elif value == 0:
            break
    
    if len(values) < 4:
        print('ERROR: Enter four or more values!')
    else:
        values_original = values.copy()

        print(remove_outliers(values, 2))
        print(values_original)

main()
    


