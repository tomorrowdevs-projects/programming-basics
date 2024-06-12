import random

def generate_password() -> str:
    '''
    Return a string of a lenght between 7 and 10 characters
    '''

    ascii_symbols = ""

    for i in range(33,127):
        ascii_symbols += chr(i)

    length = random.randint(7,10)
    
    password = ""
    for i in range(0,length):
        password += random.choice(ascii_symbols)

    return password
    
if __name__=="__main__":
    print("Suggested password  {}".format(generate_password()))