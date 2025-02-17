def sum_values():
    n = input('Enter an integer or a float (blank line to stop): ')
    if n == '':
        return 0.0
    else:
        return sum_values() + float(n)

print(sum_values())
