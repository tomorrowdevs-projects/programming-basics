
change_in_cents = int(input("Insert the value of your coins express in cents: "))

current_coin = [200,100,25,10,5,1]
coin_name = ['toonies', 'loonies', 'quarters', 'dimes', 'nickels', 'pennies']

for i in range(0,6,1):
    coin_to_print = change_in_cents // current_coin[i]
    change = change_in_cents % current_coin[i]
    if change != 0: 
        if coin_to_print != 0:
            print("Your change is " + str(coin_to_print) + " " + coin_name[i])
            change_in_cents = change
    else: 
        print("Your change is " + str(coin_to_print) + " " + coin_name[i])
        break




    
        
        
 

    

    

    

        

    
