from random import randint

def roll_pair_of_dice():
    first_dice = randint(1,6)
    second_dice = randint(1,6)
    tot = first_dice + second_dice
    return tot

def print_table(dict_of_totals):
    probability_theory = {2: 2.77, 3: 5.55, 4: 8.33, 5: 11.11, 6: 13.88, 7: 16.66, 8: 13.88, 9: 11.11, 10: 8.33, 11: 5.55, 12: 2.77}
    # in the dict probability_theory the key-value pair indicates respectively the sum in the roll of two dice, and the probability of obtaining that sum
    total_rolls = 1000
    first_row = "{:10} {:11} {}".format("Sum dice |", "Frequency |", "Percentage expected by probability theory")
    print(first_row,"\n----------------------------------------------------------------")
    for total in dict_of_totals:
        frequency = round((dict_of_totals[total] / total_rolls * 100),2)
        new_row = "{:8} {:10} % {:39} %".format(total, frequency, probability_theory[total])
        print(new_row)

def main():
    all_totals = dict()
    for roll in range(1,1001):
        total = roll_pair_of_dice()
        if total not in all_totals:
            all_totals[total] = 1
        else: 
            all_totals[total] += 1
    print_table(all_totals)

if __name__ == "__main__":
    main()