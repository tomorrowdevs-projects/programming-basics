import random

def rolling_dice(): # simulate the rolling dice and return the roll total
    d_one = random.randint(1,6)
    d_two = random.randint(1,6)
    roll_total = d_one + d_two

    return roll_total

def count_total():  # count how many times the dice's sum are 2,3,4...and 12
    count_sum ={
        2: 0, 3: 0, 4: 0, 5: 0,
        6: 0, 7: 0, 8: 0,
        9: 0, 10: 0, 11: 0, 12: 0
    }

    for roll in range(1, 1001):
        dice_sum = rolling_dice()
        count_sum[dice_sum] += 1
    return count_sum

def percentage_expected():  # calculate the percentage expeted for every possible dice's sum(2,3,4...and 12)
    probabilities = { 
        2: 0, 3: 0, 4: 0, 5: 0,
        6: 0, 7: 0, 8: 0,
        9: 0, 10: 0, 11: 0, 12: 0
    }
    x = 5
    for n in range(2, 13):
        if n <= 7:
            probabilities[n] = f'{((n-1)*100) / 36:.2f}'
        else:  
            probabilities[n] = f'{((x)*100) / 36:.2f}'
            x -= 1

    return probabilities

k = 2   # key in percentage_expected()
for absolute_frequency in count_total():
    frequency = f'{(count_total()[absolute_frequency]*100) / 1000:.2f}'
    print(f"Roll's total: {k} ---> frequency: {frequency} ---> percentage expected: {percentage_expected()[k]}")
    k += 1    

    














