import random
import string

def get_random_string():
    # choose from all lowercase letter
    letters = string.printable
    length = random.randint(7, 10)
    #join helps to concatenate extracted ASCII Carachter
    result_str = ''.join(random.choice(letters) for i in range(length))
    result_str = result_str.replace(" ", "")  # in this step i removed space from string
    print("Random string of length", length, "is:", result_str)

get_random_string()