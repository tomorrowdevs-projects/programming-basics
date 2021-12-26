def int2int(finalbase, toconvert):
    number = toconvert
    converted = []
    while number > 0:
        reminder = number % finalbase
        number = int(number / finalbase)
        converted.insert(0, str(reminder))
    return ''.join(converted)

def hex2int(startbase, toconvert):
    hexadecimal = ['a', 'b', 'c', 'd', 'e','f']
    converted = 0
    for i in range(0, len(toconvert)):
        if toconvert[i].lower() in hexadecimal:
            converted += (hexadecimal.index(toconvert[i].lower()) + 10) * (startbase ** (len(toconvert) - 1 - i))
        else:
            try:
                converted += int(toconvert[i]) * (startbase ** (len(toconvert) - 1 - i))
            except:
                return f"Invalid value {toconvert[i]}"
    return converted

def int2hex(finalbase, toconvert):
    hexadecimal = ['a', 'b', 'c', 'd', 'e','f']
    number = toconvert
    converted = []
    while number > 0:
        reminder = number % finalbase
        number = int(number / finalbase)
        if toconvert < finalbase:
            if toconvert >= 10:
                return hexadecimal[toconvert-10].upper()
            else:
                return toconvert
        if reminder >= 10:
                converted.insert(0,hexadecimal[reminder-10].upper())
        else:
            converted.insert(0,str(reminder))
    return ''.join(converted)

def main():
    startbase = int(input('Enter your initial base: '))
    choosedbase = int(input('Enter which base you want to convert (in number): '))
    toconvert = input('Enter your number: ')
    if startbase < 2 or choosedbase < 2 or startbase > 16 or choosedbase > 16:
        print(f"Your base is invalid choose between 2 and 16 base")
    elif choosedbase < 11 and startbase < 11:
        print(f"your number converted in base {choosedbase} is: {int2int(choosedbase, int(toconvert))}")
    elif startbase > 10 and choosedbase < 11:
        print(f"your number converted in base {choosedbase} is: {hex2int(choosedbase, toconvert)}")
    elif startbase > 10 and choosedbase > 10:
        toconvert2 = int(hex2int(startbase, toconvert))
        print(f"your number converted in base {choosedbase} is: {int2hex(choosedbase, toconvert2)}")
    else:
        print(f"your number converted in base {choosedbase} is: {int2hex(choosedbase, int(toconvert))}")

if __name__ == '__main__':
    main()