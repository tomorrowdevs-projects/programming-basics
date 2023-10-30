import tkinter as tk

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

def create_table(horse_x, horse_y):

    window = tk.Tk()

    canvas = tk.Canvas(window, width=600, height=600)

    pos_x = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    i = 0
    z = 8
    hy = 0
    ty = 7

    color = True

    for x in range(100, 451, 50):

        canvas.create_text(x+25, 520, text=f"{pos_x[i]}")
        canvas.create_text(75, x+25, text=f"{z}")

        for y in range(100, 451, 50):

            if color == True:
                canvas.create_rectangle(x, y, x+50, y+50, fill="white")
            else:
                canvas.create_rectangle(x, y, x+50, y+50, fill="grey")

            color = not color
            canvas.create_text(x+25, y+25, text=f"{chess_table[i][ty]}")
            ty -= 1
        
        if horse_x == i:    
            for y in range(451, 100, -50):
                if hy == horse_y:
                    create_horse(x, y, canvas)
                hy += 1
        
        hy = 0
        ty = 7
        i += 1
        z -= 1
        color = not color
    
    
            

    canvas.pack()
    window.mainloop()


def create_horse(x, y, canvas):

    canvas.create_rectangle(x+17.5, y+17.5, x+30, y+30, fill="black")
    