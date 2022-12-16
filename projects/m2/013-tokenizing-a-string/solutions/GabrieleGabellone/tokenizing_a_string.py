def tokenizing(expression):
    tokens = []
    symbols = ["*", "/", "+", "-", "^", "(", ")", "[", "]", "{", "}"]
    character_index = 0
    for character in expression:   
        if character.isnumeric():
            if character_index == 0 or not expression[character_index-1].isnumeric():
                number = expression[character_index] 
                number_index = character_index
                while expression[number_index].isnumeric() and number_index + 1 < len(expression):
                    number_index += 1
                    if expression[number_index].isnumeric(): 
                        number += expression[number_index]
                tokens.append(number)
        elif character in symbols:
            tokens.append(character)
        elif character != " ": 
            return print("Error! The character '{}' is not allowed.".format(character))
        character_index += 1
    return tokens

def main():
    exp = input("Enter an expression: (integers, parentheses and the operators * / + - ^ are allowed)\n")
    if tokenizing(exp):
        print("Tokens:", tokenizing(exp))

if __name__ == "__main__":
    main()