def main():
    def hex2int(string):
        hexadecimal = ['a', 'b', 'c', 'd', 'e','f']
        # easy mode
        # final = int(string, 16)
        # return final
        # //////////////////////////////
        converted = 0
        for i in range(0, len(string)):
            if string[i].lower() in hexadecimal:
                converted += (hexadecimal.index(string[i].lower()) + 10) * (16 ** (len(string) - 1 - i))
            else:
                try:
                    converted += int(string[i]) * (16 ** (len(string) - 1 - i))
                except:
                    return f"Invalid value {string[i]}"
        return converted

    def int2hex(integer):
        hexadecimal = ['a', 'b', 'c', 'd', 'e','f']
        number = integer
        converted = []
        while number > 0:
            remaider = number % 16
            number = int(number / 16)
            if integer < 16:
                if integer >= 10:
                    return hexadecimal[integer-10].upper()
                else:
                    return integer
            if remaider >= 10:
                converted.insert(0,hexadecimal[remaider-10].upper())
            else:
                converted.insert(0,str(remaider))
        return ''.join(converted)

    hexadecimal = input('Enter here the Hexadecimal to convert: ')
    print(hex2int(hexadecimal))
    decimal = int(input('\nEnter here the decimal to convert: '))
    print(int2hex(decimal))

if __name__ == '__main__':
    main()