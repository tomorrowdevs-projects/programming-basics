import random

def roll_dice():
    dice1 = random.randint(1,6)
    dice2 = random.randint(1,6)
    return dice1 + dice2

def main():
    teorical ={
        2: 2.8,
        3: 5.6,
        4: 8.3,
        5: 11.1,
        6: 13.9,
        7: 16.7,
        8: 13.9,
        9: 11.1,
        10: 8.3,
        11: 5.6,
        12: 2.8
    }
    results = {}
    res_perc = {}
    totals = []
    for n in range(1000):
        totals.append(roll_dice())
    
    for n in range(2, 13):
        results[n] = (totals.count(n))
        res_perc[n] = round((totals.count(n)) * 0.1, 1)
       
    print(f"Number of time for each results:\n{results}")
    print(f"\nNumber of time in %:\n{res_perc}")
    print(f"\nThe teorical probability in % is:\n{teorical}")  

if __name__ == "__main__":
    main()
