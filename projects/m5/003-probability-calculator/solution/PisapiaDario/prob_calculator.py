import copy
import random

class Hat:
    def __init__(self, **kwargs):
        self.kwargs = kwargs
        self.contents = []
        for key, value in self.kwargs.items():
            for value in range(value):
                self.contents.append(key)

    def draw(self, balls):                                          
        drawn = []
        if balls < len(self.contents):
            for n in range(balls):
                x = random.choice(self.contents)
                self.contents.remove(x)
                drawn.append(x)
            return drawn
        else:
            return self.contents
  
            
def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    balls_cont = []
    for key, value in expected_balls.items():
        for value in range(value):
            balls_cont.append(key)

    y = 0        
    for n in range(num_experiments):
        hat_copy = copy.deepcopy(hat)
        balls_check = copy.copy(balls_cont)
        balls_drawn = hat_copy.draw(num_balls_drawn)
        for ball in balls_drawn:
            if ball in balls_check:
                balls_check.remove(ball)
        if balls_check == []:
            y += 1  
       
    return y/num_experiments     
