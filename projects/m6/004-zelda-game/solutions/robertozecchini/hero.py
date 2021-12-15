'''
Class defining a hero, the protagonist of zelda_game
'''
class Hero:
    def __init__(self, name = "Player1"):
        self.name = name
        self.bag = []

    def __str__(self):
        pass
    
    def roomInBag(self):
        if len(self.bag) < 10:
            return True
        else:
            return False

    def pick(self, item):
        self.bag.append(item)

    def drop(self, item):
        self.bag.remove(item)