
cents_user = (int(input("please insert how much cent you have")))
penny = cents_user
nickel = cents_user * 5
dime = cents_user * 10
quarter = cents_user * 25
loonie = cents_user * 100
toonie = cents_user * 200
dollar = loonie
total_price = (int(input("please insert total price product")))
if cents_user < total_price:
    print("you need to insert more money")
if total_price < cents_user:
    print("Your change is" " " (total_price)

