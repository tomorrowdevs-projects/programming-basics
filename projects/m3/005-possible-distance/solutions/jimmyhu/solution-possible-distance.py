def chenge(value,coins):
    # base
    if coins == 0 and value > 0:
        return False
    elif value == 0 and coins > 0:
        return True
    # returning
    if coins > 0:
        coins -= 1
        if value >= 25:
            value -= 25
        elif 25 > value >= 10:
            value -= 10
        elif 10 > value >= 5:
            value -= 5
        elif 5 > value >= 1:
            value -= 1
        # print(value)
        return chenge(value,coins)


def main():
    dollars =  int(float(input('Enter the value in dollar: '))*100)
    max_coin = int(input('Enter the max number of coin: '))
    if chenge(dollars,max_coin):
        print(f"Is possible")
    else:
        print(f"Is not possible")
    
if __name__ == '__main__':
    main()