import random
import copy

class Hat:
    #**kwargs allows us to pass a variable number of keyword arguments(passed as a dict)
    def __init__(self, **kwargs):
        #list of strings containing one item for each ball in the hat
        self.contents = []
        for key, value in kwargs.items():
        #key is the color of the ball and value is how many balls of that color there is
            for x in range(value):
                #the list items are the colors of the balls (repeated if there is more than 1 ball for color)
                self.contents.append(key)
    
    #method that accepts an argument indicating the number of balls to draw from the hat
    def draw(self, num_balls):
        if num_balls >= len(self.contents):
            return self.contents
        else:
            #removed balls from contents
            drawn_balls = []
            for x in range(num_balls):
                #draw a random ball to remove from contents and append to drawn_balls
                random_ball = random.choice(self.contents)
                self.contents.remove(random_ball)
                drawn_balls.append(random_ball)
            return drawn_balls

#function outside the class that returns a probability
def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    #we count the successes and at the end we divide successes / total num of experiments to get the probability
    success_counter = 0
    for single_experiment in range(num_experiments):
        #the hat object containing balls should be copied inside the function
        #the deep copy creates independent copy of original object and all its nested objects
        hat_copy = copy.deepcopy(hat)
        chosen_balls = hat_copy.draw(num_balls_drawn)
        #boolean successfull keeps track of whether the expected balls were drawn or not
        success = True
        for key, value in expected_balls.items():
            if chosen_balls.count(key) < value:
                success = False
                break
        #every time the expected balls are drawn, we increase the success counter by 1
        if success:
            success_counter += 1
                
    probabilty = success_counter / num_experiments
    return probabilty