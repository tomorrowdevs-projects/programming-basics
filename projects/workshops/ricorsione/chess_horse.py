'''

- Ricorsione + matrici. 
- Hai una scacchiera 8x8 e posizioni un cavallo in una posizione random nella scacchiera. 
- Devi stampare l'elenco delle mosse da effettuare per far si che il cavallo, dalla posizione in cui si trova, possa visitare ogni cella della scacchiera. 
    Chiaramente nel suo viaggio non puó passare due volte nella stessa cella.

'''

import random
from chess_board import *

# axis of chess table 
chess_table = [
    ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8'], 
    ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'], 
    ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'], 
    ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8'], 
    ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8'],
    ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8'],
    ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8'],
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8']
]

def next_move(increment, axis): # calculate movement on axis
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


def horse_move(x, y, old_position): # typical movement of horse in game of chess
        
        for i in range(1, 3): 
        
            if i == 1:
                next_y = 2
                x = next_move(i, x)
                y = next_move(next_y, y)
                
            elif i == 2:
                next_y = 1
                x = next_move(i, x) 
                y = next_move(next_y, y)

              

            if chess_table[x][y] != "already used":
                new_position = chess_table[x][y]
                print(f"\nnew position: {new_position}")
                chess_table[x][y] = "already used"
                #create_table(x, y)
                horse_move(x, y, new_position)
            elif old_position != "already used":
                if i == 1: 
                    i = 2
                elif i == 2:
                    i = 1

                match(old_position[0]):
                    case 'a':
                        x = 0
                    case 'b':
                        x = 1
                    case 'c':
                        x = 2
                    case 'd':
                        x = 3
                    case 'e':
                        x = 4
                    case 'f':
                        x = 5
                    case 'g':
                        x = 6
                    case 'h':
                        x = 7
                
                y = int(old_position[1])-1
                
                continue
            else:
                break
                

x = random.randint(0, 7) 
y = random.randint(0, 7)

start_position = chess_table[x][y]
create_table(x, y)
print(f"\nHorse began his run from {start_position}.\n")
chess_table[x][y] = "already used"

horse_move(x, y, chess_table[x][y])
print("\nAll possibile moves exausted.\n")

