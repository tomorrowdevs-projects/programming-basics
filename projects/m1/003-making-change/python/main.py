value_cents = int(input("Insert the value of your coins express in cents: "))

value_coin_now = [360,160,80,40,20,10]

for i in range(0,7,1):
    coin_print_now = value_cents // value_coin_now[i]
    change = value_cents % value_coin_now[i]
    if change != 0: 
        if value_coin_now != 0:
            print("Your change is " + str(coin_print_now) + " " + str(value_coin_now[i]/100) + " cad(s) coin(s)")
            value_cents = change
    else: 
        print("Your change is " + str(coin_print_now) + " " + str(value_coin_now[i]/100) + " cad(s) coin(s)")
        exit()
