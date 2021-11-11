import random
def one_roll():
    dice_1 = random.randint(1, 6)
    dice_2 = random.randint(1, 6)
    return dice_1 + dice_2

def thousand_roll():
    r = 1
    total_roll = dict()
    while r <= 1000:
        total_roll[r] = one_roll()
        r +=1
    return total_roll

def rolls_dict(t):
    roll_result = dict()
    for k in t:
        result = t[k]
        if result not in roll_result:
            roll_result[result] = [k]
        else:
            roll_result[result].append(k)
    return roll_result


if __name__ == "__main__":
    unsorted_roll_result = rolls_dict(thousand_roll())
    sorted_roll_result = dict(sorted(unsorted_roll_result.items()))
    for result in sorted_roll_result:
        num = result
        total_roll = len(sorted_roll_result[result])
        if num <= 7 :
            expected_freq = ((num-1)/36) * 100
        else: 
            expected_freq = ((13-num)/36) * 100
        print(f"Roll:{num} --> real frequency:{total_roll*100/1000:.2f} "
        f"--> expected frequency {expected_freq:.2f}")
