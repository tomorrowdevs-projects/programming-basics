roman = {
    "M":1000,
    "D":500,
    "C":100,
    "L":50,
    "X":10,
    "V":5,
    "I":1
}

def convert_from_roman(n:str,roman:dict):

    if n == "":
        return 0
    else:
        if len(n) >= 2:
            if roman[n[0]] < roman[n[1]]:
                return roman[n[1]]-roman[n[0]]+ convert_from_roman(n[2:],roman)
            else:
                return roman[n[0]] + convert_from_roman(n[1:],roman)
        else:
            return roman[n[0]] + convert_from_roman("",roman)

rom_num = input("Insert a roman number :")
print("{} in integer is {}".format(rom_num,convert_from_roman(rom_num,roman)))