import random
def duo_diceroll():
    rolls = {
        '1' : 0,
        '2' : 0,
        '3' : 0,
        '4' : 0,
        '5' : 0,
        '6' : 0,
    }
    for i in range(1000):
        dice_x = str(random.randint(1,6))
        dice_y = str(random.randint(1,6))
        rolls[dice_x] +=1
        rolls[dice_y] +=1
    for total in rolls:
        rolls[total] = f"{(rolls[total] / 2000) * 100 :.2f}%"
    return rolls

def main():
    print(duo_diceroll())
if __name__ == '__main__':
    main()