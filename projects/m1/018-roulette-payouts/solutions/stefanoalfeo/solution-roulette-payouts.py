import random




def random_number():

    return random.choice(possible_number)

def odd_number():

    return int(extract_number) % 2 != 0




possible_number = ["0", "00", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"]
red_number = ["1", "3", "5", "7", "9", "12", "14", "16", "18", "19", "21", "23", "25", "27", "30", "32", "34", "36"]
first_middle = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"]


extract_number = random_number()


# script

print("The spin resulted in: " + extract_number)

print("pay " + extract_number)

if extract_number != "0" and extract_number != "00":

    if extract_number in red_number:

        print("pay red")

    else:

        print("pay black")


    if odd_number() == True and (extract_number != "0" or extract_number != "00") :

        print("pay odd number")

    else:

        print("pay even number")

    if extract_number in first_middle:

        print("pay 1 to 18")

    else:

        print("pay 19 to 36")