'''

- Ricorsione + matrici. 
- Hai una scacchiera 8x8 e posizioni un cavallo in una posizione random nella scacchiera. 
- Devi stampare l'elenco delle mosse da effettuare per far si che il cavallo, dalla posizione in cui si trova, possa visitare ogni cella della scacchiera. 
    Chiaramente nel suo viaggio non puó passare due volte nella stessa cella.

'''

import random

pos_x = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
pos_y = [1, 2, 3, 4, 5, 6, 7, 8]

already_passed = [] # matrice per posizioni già toccate

def horse_move(rand_x, rand_y): # movimento cavallo
    #stop = ''
    #already_passed.append(stop)
    print(rand_x, rand_y)


x = random.randint(1, 8) 
y = random.randint(1, 8)

horse_move(pos_x[x], pos_y[y])