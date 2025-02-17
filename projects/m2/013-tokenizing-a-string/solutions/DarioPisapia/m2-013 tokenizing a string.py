
def tokenizer(string):
    symbols = "+-*/^()"
    token = []
    prov = []
    for char in string:
        if char.isdigit():
            prov.append(char)
            if char == string[-1]:
                num = "".join(prov)
                token.append(num)
        else:
            if len(prov) > 0:
                num = "".join(prov)
                token.append(num)
                prov.clear()
            if char in symbols:
                token.append(char)
            else:
                pass  
    return token  

if __name__ == "__main__":
    string = input("Digit here your math expression to tokenize:\n")
    print(tokenizer(string))
        