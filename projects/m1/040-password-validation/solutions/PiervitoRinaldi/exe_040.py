import string

password = input('Enter: ')

def pass_validation(password):
    numbers = string.digits
    lowerc_letter = string.ascii_lowercase
    upperc_letter = string.ascii_uppercase

    pass_numbers = ''
    pass_lowc_lett = ''
    pass_uppc_lett = ''

    if len(password) < 8 :
        return False

    for chr in password:
        if chr in numbers:
            pass_numbers += chr
            continue
        if chr in lowerc_letter:
            pass_lowc_lett += chr
            continue
        if chr in upperc_letter:
            pass_uppc_lett += chr
            continue
    if len(pass_numbers) >= 1 and len(pass_lowc_lett)>= 1 and len(pass_uppc_lett) >= 1:
        return True
    else:
        return False

