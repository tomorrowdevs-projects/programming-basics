def morse(text):
    text = text.upper()
    result = ""
    morse_table = {"A":".-", "B":"-...", "C":"-.-.", "D":"-..", "E":".", "F":"..-.", "G":"--.", "H":"....", "I":"..", 
    "J":".---", "K":"-.-", "L":".-..", "M":"--", "N":"-.", "O":"---", "P":".--.", "Q":"--.-", "R":".-.", "S":"...",
    "T":"-", "U":"..-", "V":"...-", "W":".--", "X":"-..-", "Y":"-.--", "Z":"--..", "1":".----", "2":"..---", "3":"...--",
    "4":"....-", "5":".....", "6":"-....", "7":"--...", "8":"---..", "9":"----.", "0":"-----", "Á":".--.-", "É":"..-..",
    "Ö":"---.", "Ä":".-.-", "Ñ":"--.--", "Ü":"..--"}

    for char in text:
        if char in morse_table:
            result += morse_table[char] + " "   # space between each sequence of dashes and dots
    return(result)

def main():
    user_text = input("Enter a text message: ")
    answer = "Your message in morse code is:"
    print(answer,morse(user_text))

if __name__ == "__main__":
    main()
