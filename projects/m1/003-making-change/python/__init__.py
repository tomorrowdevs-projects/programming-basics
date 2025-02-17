Penny = 1
Nickel = 5
Dime = 10
Quarter = 25
Loonie = 100
Toonie = 200

num_coin = input('Insert an integer number:\n')
try:
    num_coin = float(num_coin.replace(',', '.'))
    T = 0
    while num_coin > 0:
        if num_coin >= Toonie:
            num_coin -= Toonie
            T += 1
        else:
            break

    L = 0
    while num_coin > 0:
        if num_coin >= Loonie:
            num_coin -= Loonie
            L += 1
        else:
            break

    Q = 0
    while num_coin > 0:
        if num_coin >= Quarter:
            num_coin -= Quarter
            Q += 1
        else:
            break

    D = 0
    while num_coin > 0:
        if num_coin >= Dime:
            num_coin -= Dime
            D += 1
        else:
            break

    N = 0
    while num_coin > 0:
        if num_coin >= Nickel:
            num_coin -= Nickel
            N += 1
        else:
            break

    P = 0
    while num_coin > 0:
        if num_coin >= Penny:
            num_coin -= Penny
            P += 1
        else:
            break

    print(f"Here's your change: {T} Toonie, {L} Loonie, {Q} Quarter, {D} Dime, {N} Nickel, {P} Penny")

except ValueError:
    print('Invalid input. Enter an integer number!')
    num_coin = 0