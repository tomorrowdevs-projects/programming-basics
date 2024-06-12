
cents_user = (int(input("please insert how much cent you have")))
total_price = int(input("please insert total price product"))
change = cents_user - total_price

penny = (cents_user) * 1
nickel = (cents_user) * 5
dime = (cents_user) * 10
quarter = (cents_user) * 25
loonie = (cents_user) * 100
toonie = (cents_user) * 200

if change / toonie:
    total_change = change / toonie
    print("the change is", total_change, "toonies")
    if total_change / quarter:
        total_change_quarter = total_change / quarter
        print ("the change is", total_change_quarter, "quarters")
        if total_change_quarter / nickel:
            total_change_nickel = total_change_quarter / nickel
            print("the change is", total_change_nickel, "nickel")

elif change / loonie:
    total_change_loonie = change / loonie
    print ("the change is", total_change_loonie, "loonies")
    if (total_change_loonie) / dime:
        total_change_dime = (total_change_loonie) / dime
        print("the change is", total_change_dime, "dimes")

else:
    total_change_penny = change / penny
    print("the change is", total_change_penny, "penny")