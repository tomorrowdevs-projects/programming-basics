import random

def lottery_ticket():
    #create 2 lists of 6 numbers using random.sample to ensure no duplicates
    lottery = random.sample(range(1,50), 6)
    lottery.sort()
    print(*lottery, sep='-')
    ticket = random.sample(range(1,50), 6)
    ticket.sort()
    print(*ticket, sep='-')
    #check if the lists are the same. Display message depending on each case
    if ticket == lottery:
        return print('Congratulations, you won the lottery!')
    else:
        return print("What a pity, you didn't won.")

lottery_ticket()
