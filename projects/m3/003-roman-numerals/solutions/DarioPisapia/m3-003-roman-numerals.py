convert ={
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,
    "X": 10,
    "V": 5,
    "I": 1
}

def fromRoman(n):
    if len(n) == 1:
        return convert[n]
    elif len(n) == 0:
        return 0
    else:
        if convert[n[0]] < convert[n[1]]:
            return convert[n[1]]-convert[n[0]] + fromRoman(n[2:])            
        else:
            return convert[n[0]] + fromRoman(n[1:])

if __name__ == "__main__":
    n = input("Insert here your roman number: ")
    print(f"Your number converted into integer is: {fromRoman(n)}")
