# Write a function that generates a random password. The password should have a random length of between 7 and 10 characters.
# Each character should be randomly selected from positions 33 to 126 in the ASCII table.
# Your function will not take any parameters. It will return the randomly generated password as its only result.
# Display the randomly generated password in your file’s main program.
import random

print("\nClick on 'Enter' to generate your password")
enter = input()

def generatePwd():
    ascii_list = []
    for i in range(33, 127):
        ascii_list.append(chr(i))

    len_pwd = random.randint(7, 10)
    psw = []

    for i in range(len_pwd):
        psw.append(ascii_list[random.randint(0, 94)])

    for i in psw:
        print(i, end= "")

generatePwd()