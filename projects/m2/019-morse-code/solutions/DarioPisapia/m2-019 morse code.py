
morse_table = {
    "A": ".-", "B": "-...", "C":"-.-.", "D": "-..", "E": ".", "F":"..-.", 
    "G": "--.", "H": "....", "I": "..", "J": ".---", "K": "-.-", "L": ".-..", "M": "--", "N":"-.", "O": "---", "P": ".--.", "Q": "--.-", "R": ".-.", 
    "S": "...", "T": "-", "U": "..-", "V": "...-", "W": ".--", "X": "-..-",
    "Y": "-.--", "Z": "--..", "1": ".----", "2": "..---", "3": "...--",
    "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..",
    "9": "----.", "0": "-----", "Á": ".--.-", "Ä": ".-.-", "É": "..-..",
    "Ñ": "--.--", "Ö": "---.", "Ü": "..--"
}

morse_key = morse_table.keys()
if __name__ == "__main__":
    phrase = input("Enter here your text:\n").upper()
    for char in phrase:
        if char in morse_key:
            print(morse_table[char], end= " ")
