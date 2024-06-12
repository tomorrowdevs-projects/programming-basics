import copy
import random


class Hat:
    def __init__(self, **kwargs):
        self.contents = []
        for i in kwargs:
            for j in range(kwargs[i]):
                self.contents.append(i)

    def draw(self, n_ball):
        if n_ball > len(self.contents):
            return self.contents
        random_list = random.sample(self.contents, n_ball)
        for color in random_list:
            self.contents.remove(color)
        return random_list


def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    prob = 0
    for num in range(num_experiments):
        copy_hat = copy.deepcopy(hat)
        prob_ball = copy_hat.draw(num_balls_drawn)
        matches = []
        for key, values in expected_balls.items():
            if key in prob_ball:
                if values <= prob_ball.count(key):
                    matches.append(True)
        if all(matches) and len(matches) > 1:
            prob += 1
    return prob / num_experiments
