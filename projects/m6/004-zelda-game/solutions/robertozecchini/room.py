'''
Class defining a room
'''
class Room:
    def __init__(self, num, description = ""):
        self.num = num                      #room number
        self.description = ""               #description read from file
        self.doors = {}                     #doors, indexed by direction
        self.monster = None                 #a monster object (if present)
        self.items = []                     #an item list (max 5)

    def __str__(self):
        pass