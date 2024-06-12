import random

def lottery():
    ex_nums = []
    while len(ex_nums) < 6:
        ex_num = random.randint(1, 49)
        if ex_num not in ex_nums:
            ex_nums.append(ex_num)
    ex_nums.sort()
    return ex_nums

def main():
    count = 1
    while True:
        t_num = lottery()
        ex_num = lottery()
        if sorted(t_num) == sorted(ex_num):
            print(f"{t_num} is the winner")
            print(f"It took {count} tickets to win")
        else:
            count += 1

if __name__ in "__main__":
    main()
