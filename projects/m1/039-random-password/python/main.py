from random import randint

def random_password():
    lenght = randint(7,10)
    password = ""

    for i in range(1, lenght+1):
        from_table = chr(randint(33,126))
        password += from_table
    
    return(password)

if __name__ == "__main__":
    print(random_password())