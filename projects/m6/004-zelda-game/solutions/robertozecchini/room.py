'''
Class defining a room
'''
import monster

class Room:
    def __init__(self, num, description = ""):
        self.num = num                      #room number
        self.description = ""               #description read from file
        self.doors = {}                     #doors, indexed by direction
        self.monster = None                 #a monster object (if present)
        self.monster_door = None            #the secret door protected by the monster
        self.items = []                     #an item list (max 5)

    def __str__(self):
        output_string = self.description
        for direction in self.doors:
            output_string += f"There is a room to your {direction}. "
        for item in self.items:
            output_string += f"The {item} is lying on the floor."
        if self.monster:
            if self.monster.isAlive:
                output_string += f"{self.monster.name} is waiting to kill you beside a locked door."
            else:
                output_string += f"{self.monster.name} is lying dead on the floor."
        return output_string

    def add_door(self, direction, room):
        self.doors[direction] = room
    
    def add_monster(self, monster_name, weapon, direction, room):
        self.monster = monster.Monster(monster_name, weapon)
        self.monster_door = (direction, room)
    
    def add_item(self, item):
        if len(self.items) < 5:
            self.items.append(item)
            return True
        else:
            return False
    
    def rem_item(self, item):
        if item in self.items:
            self.items.remove(item)
            return True
        else:
            return False
    
    def roomForItem(self):
        if len(self.items) < 5:
            return True
        else:
            return False

    def attack_monster(self, items):
        if self.monster:
            for item in items:
                if self.monster.strike(item):
                    self.add_door(self.monster_door[0], self.monster_door[1])
                    return True
            else:
                return False
        else:
            return False
