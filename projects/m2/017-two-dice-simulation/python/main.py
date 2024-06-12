from random import randint

def dices_rolls():
    dice1 = randint(1,6)
    dice2 = randint(1,6)
    total = dice1 + dice2
    return(total)

def main():
    roll_list = []
    frequencies = {}
    for roll in range(1000):
        result = dices_rolls()
        roll_list.append(result)
    
    roll_list.sort()
    for item in set(roll_list):
        frequencies[item] = item,roll_list.count(item),roll_list.count(item)/10
        
    print("{:<8} {:<12} {:<10}".format("ROLL", "FREQUENCY", "PERCENTAGE"))      # The program will print a table with informations
    for key, value in frequencies.items():                                      # about the number of times (FREQUENCY) a specific 
        roll, frequency, percentage = value                                     # ROLL of dices appears, and also it will print
        print("{:<10} {:<10} {:<5}%".format(roll, frequency, percentage))       # the PERCENTAGE.

if __name__ == "__main__":
    main()




