import copy
import random

class Hat:    
    def __init__(self, **kwargs):
        self.contents = []
        for color, balls_number in kwargs.items():
            for n in range(balls_number):
                self.contents.append(color)

    def draw(self, num_of_balls):
        balls_drawn = []
        if num_of_balls >= len(self.contents):
            balls_drawn = copy.deepcopy(self.contents)
        else: 
            for ball in range(num_of_balls):
                random_ball = random.choice(self.contents)
                self.contents.remove(random_ball)
                balls_drawn.append(random_ball)
        return balls_drawn

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    successful_experiments = 0
    for exp in range(num_experiments):
        temp_hat = copy.deepcopy(hat)
        balls_drawn = temp_hat.draw(num_balls_drawn)
        successful = True
        
        for color, balls_number in expected_balls.items():
            if successful:
                for n in range(balls_number):
                    if color in balls_drawn:
                        balls_drawn.remove(color)
                    else:
                        successful = False
    
        if successful:
            successful_experiments += 1
    
    percentage = successful_experiments / num_experiments
    return percentage
