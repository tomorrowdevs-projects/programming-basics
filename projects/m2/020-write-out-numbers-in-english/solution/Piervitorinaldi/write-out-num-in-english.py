def number_2_english(number):
    numbers = {
    '1': 'one', '2': 'two', '3': 'trhee', 
    '4': 'four', '5': 'five', '6': 'six',
    '7': 'seven', '8': 'eight', '9': 'nine'
    }

    tens_under_twenty = {
    '10': 'ten', '11': 'eleven', '12': 'twelve', '13': 'thirteen',
    '14': 'fourteen', '15': 'fiveteen', '16': 'sixteen', 
    '17': 'seventeen', '18': 'eigtheen', '19': 'nineteen'
    }

    tens_over_twenty = {
    '2': 'twenty', '3': 'therty', '4': 'fourty',
    '5': 'fifty', '6': 'sixty', '7': 'seventy',
    '8': 'eighty', '9': 'ninty'
    }

    result = ''
    for n in number:
        if len(number) == 3:
            result += f'{numbers[n]} hundred '
            number = number[1:]

        elif len(number) == 2:
            if n == '0':
                number = number[1:]
                continue
            if n == '1':
                result += f'{tens_under_twenty[number]} '
                break
            else:
                result += f'{tens_over_twenty[n]} '
                number = number[1:]

        elif len(number) == 1:
            if n == '0':
                break
            else:         
                result += f'{numbers[n]}'

    return result

def main():
    print(number_2_english('142'))
    print(number_2_english('376'))
    print(number_2_english('789'))
    print(number_2_english('300'))
    print(number_2_english('999'))

if __name__ == '__main__':
    main()
            
            

