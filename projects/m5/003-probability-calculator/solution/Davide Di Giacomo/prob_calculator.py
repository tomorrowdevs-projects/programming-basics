import random
import copy


class Hat:
    
    def __init__(self, **search_balls):
        self.arrays = []
        for key, value in search_balls.items():
            for x in range(value):
                self.arrays.append(key)

    def draw(self, balls):
        balls_container = []
        if balls > len(self.arrays):
            return self.arrays
        else:
            for x in range(balls):
                choice = random.choice(self.arrays)
                balls_container.append(choice)
                self.arrays.remove(choice)
        return balls_container

def experiment(hat, true_balls, find_num_balls, Attempts):
    successes = 0
    for x in range(Attempts):
        hat_cpy = copy.deepcopy(hat)
        balls = hat_cpy.draw(find_num_balls)
        extraction = True
        for key, value in true_balls.items():
            if balls.count(key) < value:
                extraction = False
                break
        if extraction:
            successes += 1

    return successes / Attempts