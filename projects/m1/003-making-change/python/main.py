penny_value = 1
nickel_value = 5
dime_value = 10
quarter_value = 25
loonie_value = 100
toonie_value = 200


print("insert cents")
user_cents = int(input())   # richiesta cents all'utente


n_toonie = user_cents/toonie_value   # calcolo tooines

#print(str(int(n_toonie)) + " toonies")

sum_toonie = int(n_toonie)*toonie_value
updated_user_cents = user_cents - sum_toonie


n_loonie = updated_user_cents/loonie_value   # calcolo loonie

#print(str(int(n_loonie)) + " loonies")

sum_loonie = int(n_loonie)*loonie_value
updated_user_cents = updated_user_cents - sum_loonie


n_quarter = updated_user_cents/quarter_value   # calcolo quarter

#print(str(int(n_quarter)) + " quarters")

sum_quarter = int(n_quarter)*quarter_value
updated_user_cents = updated_user_cents - sum_quarter


n_dime = updated_user_cents/dime_value   # calcolo dime

#print(str(int(n_dime)) + " dimes")

sum_dime = int(n_dime)*dime_value
updated_user_cents = updated_user_cents - sum_dime


n_nickel = updated_user_cents/nickel_value   # calcolo nickel

#print(str(int(n_nickel)) + " nickels")

sum_nickel = int(n_nickel)*nickel_value
updated_user_cents = updated_user_cents - sum_nickel


n_penny = updated_user_cents/penny_value   # calcolo penny

#print(str(int(n_penny)) + " pennies")

print(str(int(n_toonie)) + " toonies, " + str(int(n_loonie)) + " loonies, " + str(int(n_quarter)) + " quarters, " + str(int(n_dime)) + " dimes, " + str(int(n_nickel)) + " nickels, " + str(int(n_nickel)) + " nickels, " + str(int(n_penny)) + " pennies.")
