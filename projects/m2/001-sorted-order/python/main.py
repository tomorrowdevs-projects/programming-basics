n_list = []
max_lengh = 10

while len(n_list) < max_lengh:
    n = int(input('Enter a number: '))
    if n != 0:
        n_list.append(n)
    elif n ==0:
        print("You've stoppet the program")
        break

print(sorted(n_list))