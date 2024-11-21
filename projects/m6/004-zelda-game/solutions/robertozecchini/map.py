'''
Class defining a map
'''
import room

class Map:
    def __init__(self, rooms_description = ""):
        #Create the map defining all elements
        self.rooms = {}
        rooms_descriptions = rooms_description.split('\n')
        for i in range(1, 9+1):
            if len(rooms_descriptions) > i:
                desc = rooms_descriptions[i]
            else:
                desc = f"Room {i}"
            self.rooms[i] = room.Room(i, desc)
        #room1
        self.rooms[1].add_door("EAST", 0)
        self.rooms[1].add_door("WEST", 2)
        self.rooms[1].add_door("SOUTH", 4)
        #room2
        self.rooms[2].add_door("EAST", 1)
        self.rooms[2].add_door("WEST", 3)
        self.rooms[2].add_door("SOUTH", 5)
        self.rooms[2].add_item("GOLDENEGG")
        #room3
        self.rooms[3].add_door("EAST", 2)
        self.rooms[3].add_item("MAGICSHIELD")
        #room4
        self.rooms[4].add_door("NORTH", 1)
        self.rooms[4].add_item("GOLDENCHALICE")
        #room5
        self.rooms[5].add_door("NORTH", 2)
        self.rooms[5].add_door("WEST", 6)
        self.rooms[5].add_monster("MEDUSA", "MAGICSHIELD", "SOUTH", 8)
        #room6
        self.rooms[6].add_door("EAST", 5)
        self.rooms[6].add_monster("DRACULA", "SILVERDAGGER", "SOUTH", 9)
        #room7
        self.rooms[7].add_door("WEST", 8)
        self.rooms[7].add_item("SILVERDAGGER")
        #room8
        self.rooms[8].add_door("NORTH", 5)
        self.rooms[8].add_door("EAST", 7)
        self.rooms[8].add_item("PAPER")
        #room9
        self.rooms[9].add_door("NORTH", 6)
        self.rooms[9].add_item("PRINCESS")
        #initial position in room 1
        self.currentRoom = self.rooms[1]

    def __str__(self):
        return "map"

    def changeRoom(self, room_num):
        self.currentRoom = self.rooms[room_num]