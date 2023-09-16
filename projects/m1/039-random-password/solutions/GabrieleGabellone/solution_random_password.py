import random
def random_password():
    lenght = random.randint(7,10)
    password = ""
    for i in range(1,lenght):
        ascii_position = random.randint(33,126)
        password += chr (ascii_position)
    return(password)

if __name__ == "__main__":
    print(random_password())