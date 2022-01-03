def taxi(km):
    if km < 0.14:
        cost = 4
    else:
        cost = 4 + 0.25 * (km / 0.14)
    return '{:.2f}'.format(cost)

def main():
    while True:
        user = float(input('Insert km to know the cost of travel: '))
        print('The cost is ' + str(taxi(user)) + ' $')

main()