def capitalize_it(string):
    interr = "?"
    esclam = "!"
    point = "."
    first = "i"
    position = []
    i_position = []
    upper_case=list(string)
    for pos,char in enumerate(string):
        if(char == interr):
            position.append(pos)
        if(char == first):
            i_position.append(pos)
        if(char == esclam):
            position.append(pos)
        if(char == point):
            position.append(pos)
    incremented_position = [z+2 for z in position]
    incremented_position.append(0)
    for i in incremented_position:
        x = upper_case[i].upper()
        upper_case = [item.replace(upper_case[i], x) for item in upper_case]    
    for i in i_position:
        if upper_case[i-1] and upper_case[i+1] == " ":
            x = upper_case[i].upper()
            upper_case = [item.replace(upper_case[i], x) for item in upper_case]
    print("".join(upper_case))

string=str(input("Enter a string without uppercase: "))
capitalize_it(string)