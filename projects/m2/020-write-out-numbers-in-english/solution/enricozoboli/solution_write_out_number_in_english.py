def build_num_dict():
    num_less_20 = [x for x in range(0, 20)] + [x for x in range(20, 91, 10)]
    number_in_letters = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 
                    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 
                    'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
                    'nineteen','twenty', 'thirty', 'fourty', 'fifty', 'sixty',
                    'seventy', 'eighty', 'ninety']
    
    num_dict = dict(zip(num_less_20, number_in_letters))
    return num_dict

def write_out(num):
    writed_number = []
    if num < 20:
        writed_number.append(build_num_dict()[num])
    elif  20 <= num <= 99:
        writed_number.append(build_num_dict()[(num -(num % 10))])
        writed_number.append(build_num_dict()[num % 10])
    else:
        writed_number.append(build_num_dict()[num//100])
        writed_number.append('hundred')
        writed_number.append(build_num_dict()[((num %100)-(num % 10))])
        writed_number.append(build_num_dict()[num % 10])
    return writed_number

def main():
    while  True:
        number = int(input("Enter a number(q for exit): "))
        if number == 'q':
            break
        else:
            listed_number = write_out(number)
            if len(str(number)) == 1:
                print(listed_number[0].capitalize())
            else:
                while 'zero' in listed_number:
                    listed_number.remove('zero')
                    num_in_letter = " ".join(listed_number)
                print(num_in_letter.capitalize())   
            

if __name__ == "__main__":
    main()