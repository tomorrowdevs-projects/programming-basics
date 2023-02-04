price_below_1t = 0.10 #Inizialize price less than 1 litre
price_more_1lt = 0.25 #Inizialize price more than 1 litre

bottle_below_1lt = int(input(" How many bottles do you have below 1 litres? "))
refound_less_1lt = bottle_below_1lt * price_below_1t #moltiplicate price * number of bottles

bottle_more_1lt = int(input("How many bottle do you have more than 1 litres? "))
refound_more_1lt = bottle_more_1lt * price_more_1lt #moltiplicate price * number of bottles

print(f"Ando your total refound is {refound_less_1lt + refound_more_1lt :.2f}$") #the results is the sum of bottles of more and less than 1 lt



#I used .2f for rounding float with 2 digit