print("This is a program that tests the collatz conjecture.")
while True:
    first_num = int(input("Write the First integer: "))

    if first_num <= 0:
        break
    while True:
        print(first_num)
        if first_num == 1:
            print("Done.")
            break
        if first_num % 2 == 0:
            first_num /= 2
        else:
            first_num = (first_num * 3 + 1)

