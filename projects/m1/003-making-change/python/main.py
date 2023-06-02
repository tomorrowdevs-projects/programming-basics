
change_in_cents = int(input("Insert the value of your coins express in cents: "))

<<<<<<< HEAD
current_coin = [200,100,25,10,5,1]
coin_name = ['toonies', 'loonies', 'quarters', 'dimes', 'nickels', 'pennies']

for i in range(0,6,1):
=======
current_coin = [200,100,50,20,10,5]

for i in range(0,7,1):
>>>>>>> b5300b5cb37c23edae1227fa7ed4aa9a01fd5763
    coin_to_print = change_in_cents // current_coin[i]
    change = change_in_cents % current_coin[i]
    if change != 0: 
        if coin_to_print != 0:
<<<<<<< HEAD
            print("Your change is " + str(coin_to_print) + " " + coin_name[i])
            change_in_cents = change
    else: 
        print("Your change is " + str(coin_to_print) + " " + coin_name[i])
        break
=======
            print("Your change is " + str(coin_to_print) + " " + str(current_coin[i]/100) + " euro(s) coin(s)")
            change_in_cents = change
    else: 
        print("Your change is " + str(coin_to_print) + " " + str(current_coin[i]/100) + " euro(s) coin(s)")
        exit()
>>>>>>> b5300b5cb37c23edae1227fa7ed4aa9a01fd5763




    
        
        
 

    

    

    

        

    
