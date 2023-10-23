'''

- Ricorsione + matrici. 
- Hai una scacchiera 8x8 e posizioni un cavallo in una posizione random nella scacchiera. 
- Devi stampare l'elenco delle mosse da effettuare per far si che il cavallo, dalla posizione in cui si trova, possa visitare ogni cella della scacchiera. 
    Chiaramente nel suo viaggio non puó passare due volte nella stessa cella.

'''

import random

# axis of chess table 
pos_x = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
pos_y = [1, 2, 3, 4, 5, 6, 7, 8]

already_passed = [] 

def match(increment, axis): # calculate movement on axis
    sign = 0
    if increment == 1:
        match (axis):
            case 0:
                axis += increment
            case 7:
                axis -= increment
            case 1 | 2 | 3 | 4 | 5 | 6:
                sign = random.randint(-1, 1)
                if sign != 0:
                    axis += increment * (sign)
                else:
                    axis += increment

    elif increment == 2:
        match (axis):
            case 0 | 1:
                axis += increment
            case 6 | 7:
                axis -= increment
            case 2 | 3 | 4 | 5:
                sign = random.randint(-1, 1)
                if sign != 0:
                    axis += increment * (sign)
                else:
                    axis -= increment
            

    return axis


def horse_move(x, y): # typical movement of horse in game of chess
    
    
    stop = pos_x[x] + str(pos_y[y])
    already_passed.append(stop)
    
    while True:
        next_x = random.randint(1, 2)
        
        if next_x == 1:
            next_y = 2
            x = match(next_x, x)
            y = match(next_y, y)

        elif next_x == 2:
            next_y = 1
            x = match(next_x, x)
            y = match(next_y, y)

        new_position = pos_x[x] + str(pos_y[y])
        print(f"new position: {new_position}")
        if new_position in already_passed:
            break
        else:
            horse_move(x, y) 


x = random.randint(0, 7) 
y = random.randint(0, 7)

start_position = pos_x[x] + str(pos_y[y])
print(f"\nHorse began his run from {start_position}.\n")
horse_move(x, y)
print("\nAll possibile moves exausted.\n")
print(already_passed)