lst = []

while True:
    user_input = int(input('Type a positive integer or a integer equal or lower than 0 to stop the program: \n'))
    lst.append(user_input)
    if user_input > 0:
        while not lst[-1] == 1:
            if lst[-1] % 2 == 0:
                    lst.append(lst[-1] // 2)
            elif not lst[-1] % 2 == 0:
                lst.append((lst[-1] * 3) + 1)
        print(lst)
    elif user_input <= 0:
        break            
           