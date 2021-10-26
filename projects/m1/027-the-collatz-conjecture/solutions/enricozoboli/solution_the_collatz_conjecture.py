
while True:
    n = int(input("Enter number: "))
    n_final = n
    if n_final > 0:
        while True:
            if n_final % 2 == 0:
                n_final //=  2
                print(n_final)
                if n_final == 1:
                    break
                else:
                    continue
            else:
                n_final = (n_final * 3) +1
                print(n_final)
                continue
    else:
        break