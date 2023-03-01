def two_dice_roll() -> int:
    '''
    It simulate rolling a pair of six-sided dice
    return the total that was rolled on two dice
    '''
    import random

    return random.randint(1,6) + random.randint(1,6)

def calc_probability(totrolls:int,success:int,prob:float):
    '''
    Calculates the probability of getting exactly 'success' number of successes with 'totrolls' number of rolls.
    The probability of success is prob
    '''

    def fattoriale(n:int):
        '''
        return the factorial of n
        '''
        fatt = 1
        for i in range(1,n+1):
            fatt *= i
        return fatt
    

    coeff_bin = fattoriale(totrolls)/((fattoriale(success)*(fattoriale(totrolls-success))))
    result  = coeff_bin * prob**success * (1-prob)**(totrolls-success)

    return result

#'rolls' is a dictionary containing key-value pairs consisting of total rolled and the number of times rolled
rolls = {}

#'probability' is a dictionary containing key-value pairs consisting of total rolled and the probability to roll it in a two_dice_roll
probability = {}

#construction of dict 'rolls' with each total rolled possible and construction of probability with each probability
for i in range(2,13):
    rolls[i]=0
    if i == 2 or i == 12:
        probability[i]= 1/36
    if i == 3 or i == 11:
        probability[i] = 2/36
    if i == 4 or i == 10:
        probability[i] = 3/36
    if i == 5 or i == 9:
        probability[i] = 4/36
    if i == 6 or i == 8:
        probability[i] = 5/36
    if i == 7:
        probability[i] = 6/36


numb_of_rolls = int(input("How many rolls? "))

#for each dice roll, add one occurrence in 'rolls' whose key is the total rolled
for roll in range(numb_of_rolls):
    tot = two_dice_roll()
    rolls[tot] += 1

#'frequency' is a dictionary containing key-value pairs consisting of total rolled and its frequency 
frequency = {}

#construction of dict 'frequency'
for item in rolls.keys():
    frequency[item] = ((rolls[item] / numb_of_rolls))

#print table that summarize data
    print("{:8}{:8}{:10}{:10}".format("Total","Occurs","Frequency","Probability"))
for total in rolls:
    prob = calc_probability(numb_of_rolls,rolls[total],probability[total])
    print("{:^8}{:^8}{:^9.1%}{:9.2%}".format(total,rolls[total],frequency[total],prob))
    