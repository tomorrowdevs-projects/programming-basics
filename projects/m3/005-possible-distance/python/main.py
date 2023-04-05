def is_possible_money_change(money: int,coins:int) -> bool:
    coin = {
        "quarter": 0.25,
        "dime": 0.10,
        "nickel": 0.05,
        "penny": 0.01,
    }

    if money == 0 and coins == 0:
        return True
    else:
        if (money == 0 and coins != 0) or (money != 0 and coins == 0):
            return False
    
    if money >= coin["quarter"]:
        if is_possible_money_change(money-coin["quarter"],coins-1):
            return True
        
    if money >= coin["dime"]:
        if is_possible_money_change(money-coin["dime"],coins-1):
            return True

    if money >= coin["nickel"]:
        if is_possible_money_change(money-coin["nickel"],coins-1):
            return True
      
    if money >= coin["penny"]:
        if is_possible_money_change(money-coin["penny"],coins-1):
            return True
      
    
    return False

money = float(input("insert an amount of dollars "))
coins = int(input("Insert a number of coins "))

if is_possible_money_change(money,coins):
    print(f"OK! You can have $ {money} using {coins} coins")
else:
    print(f"Not OK! You cannot have $ {money} using {coins} coins")