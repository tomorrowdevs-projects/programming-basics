# imports random module
import random

# defines a function that generate a randmon password with a length between of 7 and 10 characters randomly selected from position 33 to 126 of ascii_values, it will not takes any parameter 
def makePassword():
# creates a empty list where store password
    password = []
# iterates with for loops from 7 to 10 times
    for i in range(1, random.randint(7, 10)):
# declares a variable for a random value between 33 and 126 that rapresents the ASCII value
        rm = random.randint(33, 126)
# declare a varible where using chr() the "rm" value is converted in a character
        ascii_value = chr(rm)
# adds to "passsword" the character
        password.append(ascii_value)
# joins and converts in a string "password" at the end of the cycle
    return ''.join(password)

# defines a main function to demostrate makepassword()
def main():
    print(makePassword())

# assign to __name__ value of 'name' so the program could run only if is not imported in another file 
if __name__ == '__main__':
    main()

