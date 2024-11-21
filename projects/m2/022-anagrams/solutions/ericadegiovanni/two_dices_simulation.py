import random

def roll_2dice():

   # simulate the rolling of two dice (no parameters)
   # return the total that was rolled as its only result. 
    return random.randint(1,6) + random.randint(1,6)

def calc_occurrences(rolls):

    # return a dictionary with the times each key occurs in the given list

    results_counter = dict()
    for result in rolls:
        if result not in results_counter:
            results_counter[result] = 1
        else:
            results_counter[result] += 1
    return results_counter


def main():
    
    # count the times each possible result can occur from rolling two six-sided dice
    dice = [i for i in range(1,7)]
    all_possible_outcomes = [side1 + side2 for side1 in dice for side2 in dice ]
    outcomes_occurrence = calc_occurrences(all_possible_outcomes)

    # simulate 1000 times the roll of the dice
    roll_results = [roll_2dice() for _ in range(1, 1001)]      
    rolls_occurences = calc_occurrences(roll_results)

    # Create a table:
    # Express the frequency for each total as a percentage of the number of rolls performed. 
    # Display the percentage expected by probability  

    print('|         | Rolls     |  Probability |')
    print('| Result  | Frequency |  Theory      |')
    print('--------------------------------------')

    for i in range(2,13):
        print(f'    {i}'.ljust(12), end=' ')
        print(f'{(rolls_occurences[i]/len(roll_results))*100 :.2f}'.ljust(9), end=' ')
        print(f'   {(outcomes_occurrence[i]/len(all_possible_outcomes))*100 :.2f}')
    

if __name__ == '__main__':
    main()
