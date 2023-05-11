def caesar_cipher(string):
    """
    Encrypts/Decrypts the given message using the Caesar cipher
    with the given shift value.
    """
    replacements = {
        "a": "d",
        "b": "e",
        "c": "f",
        "d": "g",
        "x": "a",
        "y": "b",
        "z": "c"
    }
    result = ""
    for letter in string:
        if letter in replacements:
            result += replacements[letter]
        else:
            result += letter
    return result
if __name__ == "__main__":
    string = input("Insert a word: ")
    print(caesar_cipher(string))