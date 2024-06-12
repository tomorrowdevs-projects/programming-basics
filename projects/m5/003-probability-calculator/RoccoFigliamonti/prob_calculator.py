import copy
import random


class Hat:
    
    def __init__(self, **kwargs):
        self.contents = []
        kwargs_elem = [[k]*y for k,y in kwargs.items()] #making list of list
        for i in range(len(kwargs_elem)):
            for el in kwargs_elem[i]:
                self.contents.append(el)
        """
        for k, v in kwargs.items():
            for i in range(v):
                self.contents.append(k)
        """


    def draw(self, num_of_balls:int):
        balls_list = []
        if num_of_balls > len(self.contents):
            balls_list = [x for x in self.contents]
            self.contents = []
        else:
            for i in range(num_of_balls):
                ball = random.choice(self.contents)
                balls_list.append(ball)
                self.contents.remove(ball)            
        return balls_list


def experiment(hat, expected_balls:dict, num_balls_drawn:int, num_experiments:int):
    counter_successes = 0
    for i in range(num_experiments):
        #making a dictionary of extracted balls
        hat_copy = copy.deepcopy(hat)
        extracted_balls_list = hat_copy.draw(num_balls_drawn)
        extracted_balls_dict = {}
        for el in extracted_balls_list:
            extracted_balls_dict[el] = extracted_balls_dict.get(el,0)+1

        #controlling if expected balls are in extracted balls dict
        success = True
        for k,v in expected_balls.items():
            if k in extracted_balls_dict.keys(): 
                if v <= extracted_balls_dict[k]: #the extracted balls should be at least the number of expected balls
                    success = True
                else:
                    success = False
                    break
            else: #if a key of expected balls is not in extracted balls, it means that this kind of ball is not extracted, so it's a fail
                success = False
                break
        if success == True:
            counter_successes += 1

    return counter_successes/num_experiments



hat = Hat(blue=4, red=2, green=6)
probability = experiment(
    hat=hat,
    expected_balls={"blue": 2,
                    "red": 1},
    num_balls_drawn=4,
    num_experiments=3000)
print("Probability:", probability)