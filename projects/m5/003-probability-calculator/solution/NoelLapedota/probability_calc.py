import random
import copy

class Hat:

 def __init__(self, **kwargs):
     self.contents = []
     for key  , value in kwargs.items():
         for x in range(value):
            self.contents.append(key)
         
     
     
 def draw(self, number_of_balls):
     balls_removed = []
     if number_of_balls > len(self.contents):
        return self.contennts
     while len(self.contents) != 1:
         ball = random.choice(self.contents)
         self.contents.remove(ball)
         balls_removed.append(ball)
     return balls_removed
   
         
def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
     m = 0
     contents = []
    # list of strings
     for key  , value in expected_balls.items():
         for x in range(value):
            contents.append(key)
           
     for n in range(num_experiments):
         new_hat = copy.deepcopy(hat)
         exrract_balls = new_hat.draw(num_balls_drawn)
         if len(contents) == 0:
             m += 1

     return  m / num_experiments   