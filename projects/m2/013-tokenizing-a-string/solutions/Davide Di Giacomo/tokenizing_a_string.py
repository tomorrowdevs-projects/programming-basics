#Tokenizing is the process of converting a string into a list of substrings
#Write a function that takes a mathematical expression and breaks it into a list of tokens.
#Each token should be a parenthesis, an operator, or a number.
#main program printing the list of tokens
#main program not run if file containing your solution is imported into another program.
#turn the input string in a list
#if element is an operator append to final list
#if the previous element and the follow element are an int .join them
#if the element is " " doesn't add it

def list_tokens(mathematical):
    #turn the input string in a list
    token=list(mathematical)
    tokenizing= []
    operator= [ "*", "/", "ˆ", "-", "+", "(", ")", "[", "]", "{", "}"]
    numbers=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    
    for x in token:
        index=token.index(x)
        #if the previous element and the follow element are an int .join them
        if x in numbers:
            if index<=len(token)-2:
                if token[index] in numbers and token[index+1] in numbers:
                        number= token[index]+token[index+1]
                        tokenizing.append(number)
                
            elif token[index] in numbers and token[index-1] in numbers:
                    continue
            elif x!=" ":
                        tokenizing.append(x)
        #if element is an operator append to final list
        elif x in operator:
                        tokenizing.append(x)
    return tokenizing
                    
def main(mathematical):
    print(list_tokens(mathematical))

if __name__ == "__main__":
    mathematical=input("Write a mathematical expression: ")
    main(mathematical)