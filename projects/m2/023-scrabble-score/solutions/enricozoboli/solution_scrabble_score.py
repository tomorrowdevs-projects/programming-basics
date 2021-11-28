def compute_points(s):
    """
    Takes a string and return the total points. Every sigle letters
    is equivalent to an amount of points based on the scrabble point
    dictionary
    Parameter: string
    Return: int
    """
    characters = ['aeilnorstu','dg', 'bcmp', 'fhvwy','k', 'jx', 'qz']
    char_point = [1 ,2 ,3 ,4, 5, 8, 10] 
    scrabble_points = dict(zip(characters, char_point))
    total_points = 0
    for letter in s:
        for key in scrabble_points.keys():
            if letter in key:
                total_points += scrabble_points[key]
                break
    return total_points

def main():
    while True:
        string = input("Enter a word(blank for exit): ")
        if string == " ":
            break
        else:
            print(f"Total points: {compute_points(string)}")

if __name__ == "__main__":
    main()
    
    