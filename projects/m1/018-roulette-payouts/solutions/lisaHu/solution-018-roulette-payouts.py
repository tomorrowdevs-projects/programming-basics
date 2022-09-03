import random
redList = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
blackList = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]

def pay():
    num = random.randint(0,36)
    print("Pay " + str(num))
    if 0 < num:
        if num in blackList:
            print('Pay Black')
        else:
            print('Pay Red')
        if num % 2 == 0:
            print('Pay Even')
        else:
            print('Pay Odd')
        if 1 <= num <= 18:
            print('Pay 1 to 18')
        else:
            print('Pay 19 to 36')
    else:
        return

pay()