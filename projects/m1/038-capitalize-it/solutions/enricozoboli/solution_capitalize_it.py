def capitalize(s):
    s_stripped = s.lstrip()
    s_capital =""
    s_capital += s_stripped[0].upper()
    flag = False
    for i in range(1, len(s_stripped)):
        if s_stripped[i] == "!" or s_stripped[i] == "?"\
            or s_stripped[i] == ".":
            s_capital += s_stripped[i] 
            flag = True 
        elif s_stripped[i] == "i" and s_stripped[i-1] == " "\
            and s_stripped[i + 1] == " ":
            s_capital += s_stripped[i].upper()
        elif s_stripped[i] == "i" and s_stripped[i-1] == " "\
            and (s_stripped[i + 1] == "'" or s_stripped[i + 1] == "’"):
            s_capital += s_stripped[i].upper()
        elif flag and s_stripped[i] != " ":
            s_capital += s_stripped[i].upper()
            flag = False
        else:
            s_capital += s_stripped[i]
        

    return s_capital

def main():
    s ="   what time do i have to be there? what’s"\
        " the address? this time i’ll try to be on time!"
    print(capitalize(s))

if __name__ == "__main__":
    main()
