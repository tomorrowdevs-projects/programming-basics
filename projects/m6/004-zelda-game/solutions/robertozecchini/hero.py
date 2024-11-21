'''
Class defining a hero, the protagonist of zelda_game
'''
class Hero:
    def __init__(self, name = "Player1"):
        self.name = name
        self.bag = []

    def __str__(self):
        output_string = "Your bag contains the following items:\n"
        if len(self.bag) == 0:
            output_string += "Currently, you bag is empty\n"
        else:
            for item in self.bag:
                output_string += f"{item}\n"
        output_string += "Current cash is: 0\n"       #no cash management for now
        return output_string
    
    def roomInBag(self):
        if len(self.bag) < 10:
            return True
        else:
            return False

    def pick(self, item):
        self.bag.append(item)

    def drop(self, item):
        self.bag.remove(item)