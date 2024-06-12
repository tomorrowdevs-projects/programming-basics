def converter(quantity,measure):
    overallqt = 0
    measures = ['cup','tablespoon','teaspoon']
    result = [0,0,0]
    if measure == measures[2]:
        overallqt = quantity
    else:
        overallqt = quantity * (3 if measure == measures[1] else 48)
    while overallqt > 0:
        if overallqt > 48:
            overallqt -= 48
            result[0] +=1
        elif 48 > overallqt > 3:
            overallqt -= 3
            result[1] +=1
        else:
            result[2] += overallqt
            overallqt = 0
    return f"{result[0]} {measures[0]}, {result[1]} {measures[1]}, {result[2]} {measures[2]}"

def main():
    quatity = int(input('Enter the quantity: '))
    measu = input('which measure are the quantity? (cup,tablespoon,teaspoon): ')
    print(converter(quatity,measu.lower()))

if __name__ == '__main__':
    main()