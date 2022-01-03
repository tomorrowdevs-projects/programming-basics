def ordinalnumber(number):
    mylist = ['Four', 'Fif', 'six', 'Seven', 'Eigh', 'Nin', 'Ten', 'Eleven', 'twelf']
    if number == 1:
        ord_numb = 'First'
    elif number == 2:
        ord_numb = 'Second'
    elif number == 3:
        ord_numb = 'Third'
    elif 4 <= number <= 12:
        ord_numb = mylist[number - 4] + 'th'
    else:
        ord_numb = ''

    return ord_numb    

def main():
    number = 1
    while number <= 12:
        print('The ordinal number of ' + str(number) + ' is ' +  ordinalnumber(number))
        number += 1


if __name__ == '__main__':
    main()