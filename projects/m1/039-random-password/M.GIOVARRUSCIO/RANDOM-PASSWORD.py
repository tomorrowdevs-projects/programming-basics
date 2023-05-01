"""
Write a function that generates a random password.
The password should have a random length of between 7 and 10 characters.
Each character should be randomly selected from positions 33 to 126 in the ASCII table.
Your function will not take any parameters.
It will return the randomly generated password as its only result.
Display the randomly generated password in your file’s main program.
"""
import random

def genera():
    # GENERA UN NUMERO TRA 7 E 10
    length = random.randint(7, 10)
    s=""
    for i in range(1,length):
        # GENERA UN CARATTERE RANDMOM TRA I CODICI ASCII 33 E 126
        d=chr(random.randint(33, 126))
        s=s+d #concatena
    return s

if __name__ == '__main__':
    print(genera())