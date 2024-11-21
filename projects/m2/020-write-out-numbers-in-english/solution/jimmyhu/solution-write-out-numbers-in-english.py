def wordnumber(num):
    labl = {
        'unit': ['one','two','three','four','five','six','seven','eight','nine'],
        'special': ['eleven','twelve','thirteen','fourteen'],
        'decim': ['twenty','thirty','forty',],
        'prefix': ['fif','six','seven','eigh','nine'],
        'suffix':['teen','ty'],
    }
    target = 2
    if len(num) < 3:
        target -=1
    if len(num) > 1:
        if num[target-1] == '1':
            if int(num[target]) > 4:
                decimals = labl['prefix'][int(num[target])-5] + labl['suffix'][0]
            else:
                decimals = labl['special'][int(num[target])-1]
        else:
            unit = labl['unit'][int(num[target])-1]
            if int(num[target-1]) > 4:
                decimals = f"{labl['prefix'][int(num[target-1])-5] + labl['suffix'][1]} {unit}"
            else:
                decimals = f"{labl['decim'][int(num[target-1])-2] } {unit}"

    if len(num) == 3:
        starter = f"{labl['unit'][int(num[0])-1]} hundred"
        return f"{starter} {decimals}"
    elif len(num) == 2:
        return decimals
    elif len(num) == 1:
        return labl['unit'][int(num[0])-1]

def main():
    base = input('Enter a number (less than 999): ')
    print(wordnumber(base))
if __name__ == '__main__':
    main()