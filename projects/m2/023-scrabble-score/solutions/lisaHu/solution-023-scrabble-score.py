def scrabble_points(s):
    points = {1:'aeilnorstu', 2:'dg', 3:'bcmp',
    4:'fhvwy', 5:'k', 8:'jx', 10:'qz'}

    result = 0
    #for every character in string, check in every pair in dictionary if the character is in any value
    #if it is, it will add the key(integer)of the corresponding value to the result
    for c in s:
        for key, value in points.items():
            if c in value:
                result += key
    return result

if __name__ == "__main__":
    string = input('Enter a word: ')
    print('This word is worth', str(scrabble_points(string)), 'points in scrabble.')