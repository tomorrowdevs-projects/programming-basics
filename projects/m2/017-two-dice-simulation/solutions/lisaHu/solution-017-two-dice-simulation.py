#M2 017-TWO-DICE-SIMULATION

import random
#simulation of one roll with random results
def one_roll():
    total_dice = random.randint(1,6) + random.randint(1,6)
    return total_dice

def one_thousand_rolls():
    total = [0,0,0,0,0,0,0,0,0,0,0]
    expected_frequency = [0,0,0,0,0,0,0,0,0,0,0]
    real_frequency = [0,0,0,0,0,0,0,0,0,0,0]
    #call of function for 1000 times + add 1 for every total whenever it's computed
    for i in range(0,1000):
        one_roll()
        total[one_roll()-2] += 1
        #compute expected frequency using past 100 rolls as reference
        if i == 99:
            z = 0
            for i in range(0,11):
                i = ((total[z] * 100) /100)/100
                expected_frequency[z] += i
                #change the format of specified element in percentage
                expected_frequency[z] = "{:.2%}".format(expected_frequency[z])
                z += 1
    #compute real frequency of all rolls in percentage
    z = 0
    for i in range(0,11):
        i = ((total[z] * 100) /1000)/100
        real_frequency[z] += i
        real_frequency[z] = "{:.2%}".format(real_frequency[z])
        z += 1

    #create a dictionary with 11 keys that holds a list of 4 elements with results
    simulation = {}
    for i in range(0,11):
        simulation[i] = i+2, total[i], expected_frequency[i], real_frequency[i]

    #print dictionary in table format with 4 columns and 12 rows
    print()
    print("{:<20} {:<20} {:<20} {:<20}".format('RESULT', 'TOTAL ROLLS', 'EXPECTED FREQUENCY', 'REAL FREQUENCY'))

    for key, value in simulation.items():
        result, rolls, probability, frequency = value
        print("{:<20} {:<20} {:<20} {:<20}".format(result, rolls, probability, frequency))
    print()

if __name__ == '__main__':
    one_thousand_rolls()