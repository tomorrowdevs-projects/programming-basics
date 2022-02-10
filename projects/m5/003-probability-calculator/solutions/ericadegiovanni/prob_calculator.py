import copy
import random
# Consider using the modules imported above.

class Hat:
    
    def __init__(self, **args):

        # hat will always be created with at least one ball
        assert sum([args[a] for a in args.keys()]) > 0, f'You must insert at least one ball'
        self.contents = [a for a in args for _ in range(args[a])] #list of strings containing one item for each ball in the hat.
    
    def draw(self, num_balls):

        '''
        balls: integer representing the number of balls to draw
        draw randomly balls from the list contents and update it
        return a list cointaining the balls removed
        '''
        balls_removed = []
        if num_balls >= len(self.contents):
            balls_removed = [ball for ball in self.contents]           
        else:
            for _ in range(num_balls):
                ball_drawn = random.choice(self.contents)
                self.contents.remove(ball_drawn)
                balls_removed.append(ball_drawn)

        return balls_removed

        

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    """
    hat: an hat object
    expected_balls: object indicating the group of balls to attempt to draw from the hat.
    num_balls_drawn: the number of balls to draw out of the hat in each experiment.
    num_experiments: The number of experiments to perform.
    return the probability to draw the expected balls with the inserted conditions
    """
    
    match_count = 0  # experiment results matching the expected balls

    for i in range(num_experiments):
        hatc = copy.deepcopy(hat)
        balls_drawn = hatc.draw(num_balls_drawn) 

        res = False
        for b in expected_balls:
            if expected_balls[b] <= balls_drawn.count(b):
                res = True
            else:
                res = False
                break
        if res: match_count +=1   

    return  match_count / num_experiments 


