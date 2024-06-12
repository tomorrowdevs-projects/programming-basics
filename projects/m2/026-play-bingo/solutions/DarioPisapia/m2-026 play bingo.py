import random

def bingo_card():
    card = {"B": [], "I":[],"N":[],"G":[],"O":[]}
    keys = card.keys()
    n1 = 1
    n2 = 15
    for key in keys:
        while len(card[key]) < 5:
            n = random.randint(n1, n2)
            if n not in card[key]:
                card[key].append(n)
        n1 += 15
        n2 += 15
    return card

def checkingWin(card):
    win = False
    keys = list(card.keys())

    #diagonal up left - down right
    s = 0
    for n in range(5):
        s += card[keys[n]][n]       
    if s == 0:
        win = True
             
    #diagonal down left - up right
    count = 4
    s = 0
    for key in card:
        s += card[key][count]
        count -= 1
    if s == 0:
        win = True
            
    #horizontal
    for n in range(5):
        s = 0
        for key in card:
            s += card[key][n]
        if s == 0:
            win = True
            break
            
    #vertical
    for key in card:
        s = 0
        for n in range(5):
            s += card[key][n]
        if s == 0:
            win = True
            break

    return win


def call():
    calls = []
    for n in range(76):
        calls.append(n)
    random.shuffle(calls)
    return calls
      
def play():
    card = bingo_card()
    calls = call()
    count = 0
    for n in calls:
        count += 1
        if checkingWin(card):
            break      
        for key in card.keys(): 
            for i in range(5):
                if card[key][i] == n:
                    card[key][i] = 0         
    return count


def statistics():
    stats = []
    for n in range(1000):
        stats.append(play())
    mininum = min(stats)
    maximum = max(stats)
    average = sum(stats)/len(stats)
    print(f"The miminum amount of calls was: {mininum}\nThe maximum amount of calls was: {maximum}\nThe averege number of calls was: {average:.2f}")

if __name__ == "__main__":
    input("Press ENTER to star the program ")
    statistics()
