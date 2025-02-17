collatz = []
def conjecture(number):
    collatz.append(number)
    for number in collatz:
        if number !=1:
            if number%2==0:
                collatz.append(number/2)
            else:
                collatz.append(number*3+1)
        elif number == 1:
            return(collatz)

number=1
while number > 0:
    number = int(input("Inser a positive integer number:"))
    print(conjecture(number))
    collatz = []
