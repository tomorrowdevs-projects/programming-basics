import copy
import random

class Hat:
    
    def __init__(self, **kwargs):
        self.contents = []
        for key, value in kwargs.items():
            for x in range(value):
                self.contents.append(key)

    def draw(self, num_of_balls):
        if num_of_balls > len(self.contents):
            return self.contents
        balls_drawed = []
        for x in range(num_of_balls):
            choice = random.choice(self.contents)
            balls_drawed.append(choice)
            self.contents.remove(choice)
        return balls_drawed

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    successes = 0
    for x in range(num_experiments):
        hat_cpy = copy.deepcopy(hat)
        picked_balls = hat_cpy.draw(num_balls_drawn)
        success = True
        for key, value in expected_balls.items():
            if picked_balls.count(key) < value:
                success = False
                break
        if success:
            successes += 1

    return successes / num_experiments