'''
Solution for problem 004-zelda-game on Milestone6
'''

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
    print("OK")

if __name__ == "__main__":
    zelda_game()