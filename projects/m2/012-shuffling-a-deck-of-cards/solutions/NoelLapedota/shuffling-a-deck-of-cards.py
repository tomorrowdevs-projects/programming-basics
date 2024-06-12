cards =[]
def createDeck():
    characters = ['T','J','Q','K','A']
    siut = ['s', 'h', 'd', 'c']
    global cards
    for n in range(1,11):
        for l in siut:
         cards.append(str(n)+l)

    for n in characters:
        for l in siut:
         cards.append(str(n)+l)

print(len(cards))

def shuffle ():
    global cards
    print(cards)
    x = 0
    while x != 7:
        cards.append(cards[0])
        cards.remove(cards[0])
        x += 1 
    print(cards)
    
    
    
     






createDeck()        
