import copy
import random

class Hat:
    def __init__(self, **balls):
        self.contents = []
        for key, value in balls.items():
            for i in range(value):
                self.contents.append(key)

    def draw(self, num_of_balls):
        #this function modify self.contents in a irreverible way, pay attention
        if num_of_balls >= len(self.contents):
            return self.contents
        balls = []
        for i in range(num_of_balls):
            index = random.randrange(len(self.contents))
            balls.append(self.contents.pop(index))
        return balls

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    total = 0
    successful = 0
    for e in range(num_experiments):
        experiment_ok = True
        total += 1
        copied_hat = copy.deepcopy(hat)
        result = copied_hat.draw(num_balls_drawn)
        for color, num in expected_balls.items():
            if result.count(color) < num:
                experiment_ok = False
        if experiment_ok:
            successful += 1
    return successful / total
