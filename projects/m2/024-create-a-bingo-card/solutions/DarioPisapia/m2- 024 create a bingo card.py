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

def print_card():
    card = bingo_card()
    keys = list(card.keys())
    for key in card:
            print(key, end= "   ") 
    print()   
    for n in range(5): 
        for num in range(5): 
            x = 4 - len(str(card[keys[num]][n]))         
            print(card[keys[num]][n], end= (x*" "))
        print() 

if __name__ == "__main__":
    input("Press ENTER to print your card ")  
    print_card()
