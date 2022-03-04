import copy 
import random

class Hat:
    def __init__(self, **kwargs) -> None:
        
        #validation with assert
        assert len(kwargs) > 0, f"you should give at least 1 element"

        #Assign to self object
        self.contents = []

        #action to do at the init of the Class
        for element in kwargs:
            for i in range(0,kwargs[element]):
                self.contents.append(element)

    #draw method
    def draw(self, balls_to_draw: int):
        if balls_to_draw >= len(self.contents):
            return self.contents
        else:
            #use the list for check if there are double draw of the same element
            drawed = []
            while len(drawed) < balls_to_draw:
                num = random.randint(0,len(self.contents)-1)
                drawed.append(self.contents[num])
                del self.contents[num]
            return drawed   

def experiment(hat, expected_balls, num_balls_drawn: int, num_experiments: int):
    counter = 0
    expected_balls = {key.lower():v for key,v in expected_balls.items()}
    for interation in range(num_experiments):
        #deep-copy the hat element because draw every time draw method will delete elements in the contents
        deep_hat = copy.deepcopy(hat)
        drawed = {}
        #iteration and transform all in the lower to avoid miss match
        for element in deep_hat.draw(num_balls_drawn):
            element = element.lower()
            if element in drawed:
                drawed[element] += 1
            else:
                drawed[element] = 1
        #check for the success 
        checked = 0
        for check in expected_balls:
            if check in drawed and expected_balls[check] <= drawed[check]:
                checked += 1
        if checked == len(expected_balls):
            counter += 1
    return counter / num_experiments
        

def main():
    test = Hat(blue=4, red=2, green=6, black=50)
    print(test.draw(3))
    print(experiment(test, {"blue":2,"gReen":1}, 5, 55000))
if __name__ == '__main__':
    main()