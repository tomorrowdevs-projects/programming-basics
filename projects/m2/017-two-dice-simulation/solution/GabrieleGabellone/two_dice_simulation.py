from random import *
def roll_pair_of_dice():
    first_dice = randint(1,6)
    second_dice = randint(1,6)
    tot = first_dice + second_dice
    return tot

def print_table(d):
    probability_theory = {2: 2.77, 3: 5.55, 4: 8.33, 5: 11.11, 6: 13.88, 7: 16.66, 8: 13.88, 9: 11.11, 10: 8.33, 11: 5.55, 12: 2.77}
    # in the dict probability theory the key-value pair indicates respectively the sum in the roll of two dice, and the probability of obtaining that sum
    total_rolls = 1000
    first_row = "{:10} {:11} {}".format("Sum dice |", "Frequency |", "Percentage expected by probability theory")
    print(first_row,"\n----------------------------------------------------------------")
    for k in d:
        frequency = round((d[k] / total_rolls * 100),2)
        new_row = "{:8} {:10} % {:39} %".format(k, frequency, probability_theory[k])
        print (new_row)

def main():
    d = dict()
    for roll in range(1,1001):
        total = roll_pair_of_dice()
        if total not in d:
            d[total] = 1
        else: d[total] += 1
    print_table(d)

if __name__ == "__main__":
    main()