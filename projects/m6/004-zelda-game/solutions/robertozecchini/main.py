'''
Solution for problem 004-zelda-game on Milestone6
'''
import hero
import map
import os

# Read the content of a given text file and return it as a string
# If the file does not exist returns an empty string
def read_from_file(filename):
    try:
        with open(filename) as f:
            contents = f.read()
    except FileNotFoundError:
        print(f"The file {filename} does not exist.")
        return ""
    else:
        return contents

def zelda_game():
    #get player name
    playerName = input("Enter your name: ")
    #print incipit
    print(os.getcwd())
    print(read_from_file("Start.txt"))
    #read rooms descriptions
    rooms_descriptions = read_from_file("Rooms.txt")
    #initialize objects
    castle = map.Map(rooms_descriptions)
    player = hero.Hero(playerName)
    while True:
        #take an action from player until the end of the program
        print(castle.currentRoom)
        print(player)
        move = input("What do you want to do: ").upper()
        command = move.split(' ')[0]
        if command == "EXIT":
            print("You have chosen to exit")
            exit()
        elif command == "LOOK":
            print(castle.currentRoom)
            print(player)
        elif command == "PICK":
            item = move.split(' ')[1]
            if player.roomInBag and item in castle.currentRoom.items:
                player.pick(item)
                castle.currentRoom.rem_item(item)
                print(f"You have successfully picked the {item}")
            else:
                print("Action not permitted")
        elif command == "DROP":
            item = move.split(' ')[1]
            if castle.currentRoom.roomForItem and item in player.bag:
                player.drop(item)
                castle.currentRoom.add_item(item)
                print(f"You have successfully dropped the {item}")
            else:
                print("Action not permitted")
        elif command == "MOVE":
            direction = move.split(' ')[1]
            if direction not in castle.currentRoom.doors.keys():
                print("Move not valid")
            else:
                if castle.currentRoom.doors[direction] == 0:
                    #out of the castle
                    if "PRINCESS" in player.bag:
                        print("You win")
                        print(read_from_file("EndWin.txt"))
                        exit()
                    else:
                        print("You loose")
                        print(read_from_file("EndLose.txt"))
                        exit()
                else:
                    castle.changeRoom(castle.currentRoom.doors[direction])
                    print(f"You have successfully been moved to room {castle.currentRoom.num}")
        elif command == "ATTACK":
            if castle.currentRoom.monster:
                if not castle.currentRoom.monster.isAlive:
                    print("The monster is already dead")
                else:
                    if castle.currentRoom.attack_monster(player.bag):
                        print("You killed the monster")
                    else:
                        print("You died")
                        print(read_from_file("EndDead.txt"))
                        exit()
            else:
                print("No monster in this room")
        else:
            print(f"Action not valid (command = {command}")

if __name__ == "__main__":
    zelda_game()