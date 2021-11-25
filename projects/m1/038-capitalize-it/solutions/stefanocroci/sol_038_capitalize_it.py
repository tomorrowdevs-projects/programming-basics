def capitalize_string(string):
    # Capitalize the first letter letter of the string
    stamp = string[0].upper()
    
    for i in range(1, len(string)):
        if string[i -2] == '.' or string[i -2] == '!' or string[i -2] == '?':
            stamp += string[i].upper()
        elif string[i] == 'i' and string[i - 1] == ' ' and (string[i + 1] == ' ' or string[i + 1] == '?' or string[i + 1] == "'" or string[i + 1] == '’'):
            stamp += string[i].upper()
        else:
            stamp += string[i]

    return stamp        

def main():
    text = input('Insert a text:\n')
    print(capitalize_string(text))

if __name__ == '__main__':
    main()

