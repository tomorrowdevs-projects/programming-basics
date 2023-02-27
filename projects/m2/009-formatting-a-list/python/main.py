def formatting_string(words: list) -> str:
    
    out_string = ""
    
    index = 0
    if len(words) == 1:
        out_string = words[index]
    else:
        for index in range(len(words)):
            if index == len(words)-1:
                out_string += words[index]
            elif index == len(words)-2:
                out_string += words[index] + " and "
            else:
                out_string += words[index] +", "
    
    return out_string

item = input("Insert str item in your list. Blank to quit ")
w = []

while item != "":
    w.append(item)
    item = input("Insert str item in your list. Blank to quit ")

print(formatting_string(w))

