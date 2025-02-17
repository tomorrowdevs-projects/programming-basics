##how much money should we use?

Insert_money= float(input("Let us get the ball rolling, how much have you put in? "))
Money_You_need= float(input("This is not gonna be easy, how many bucks for what you want? "))

###value :D
Tounie = 200
Loonie = 100
Half_dollar= 50
Quarter= 25
Dime= 10
Nickel= 5
Penny= 1


User_change= round(Insert_money - Money_You_need,2)


#####Calculating coin
User_cent= User_change*100
Tounie_coin= float(User_cent /Tounie)
Tounie_rest= float(User_cent%Tounie)
Final_Tounie= float(int("%d"%Tounie_coin))

Loonie_coin= float(Tounie_rest/Loonie)
Loonie_rest= float(Tounie_rest % Loonie)
Final_Loonie= float(int("%d"%Loonie_coin))

HD_coin= float(Loonie_rest/Half_dollar)
HD_rest= float(Loonie_rest % Half_dollar)
Final_HD= float(int("%d"%HD_coin))

Quarter_coin= float(HD_rest /Quarter)
Quarter_rest= float(HD_rest%Quarter)
Final_Quarter= float(int("%d"%Quarter_coin))


Dime_coin= float(Quarter_rest/Dime)
Dime_rest= float(Quarter_rest % Dime)
Final_Dime= float(int("%d"%Dime_coin))

Nickel_coin= float(Dime_rest/Nickel)
Nickel_rest= float(Dime_rest % Nickel)
Final_Nickel= float(int("%d"%Nickel_coin))

Penny_coin= float(Nickel_rest/Penny)
Penny_rest= float(Nickel_rest % Penny)
Final_Penny= float(int("%d"%Penny_coin))

###Result <3

if Money_You_need > Insert_money:
  print("Do not jerk me around, pay the man!")

else:print("Here is your loot, now take a hike!!!","\nTounies: ", Final_Tounie,"\nLoonies: ", Final_Loonie,"\nHalf Dollar: ", Final_HD,"\nQuarters: ", Final_Quarter,"\nDimes: ", Final_Dime,"\nNickels: ", Final_Nickel,"\nPennies: ", Final_Penny)
