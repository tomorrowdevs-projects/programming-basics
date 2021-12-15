'''
Class defining a monster
'''
class Monster:
    def __init__(self, name, weapon, effect):
        self.name = name
        self.weapon = weapon
        self.isAlive = True
        self.callback = effect          #function to be call when monster die

    def __str__(self):
        pass

    def strike(self, item):
        #Try to strike the monster with an item, if you use the secret weapon the monster died and function returns true
        if item == self.weapon:
            self.isAlive = False
            self.callback()
            return True
        else:
            return False