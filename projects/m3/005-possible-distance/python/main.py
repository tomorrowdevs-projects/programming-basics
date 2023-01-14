def possible_distance(price, user_coins):
    if price > 25:
        divisor = 25
    elif price <= 25 and price > 10:
        divisor = 10
    elif price <= 10 and price >= 5:
        divisor = 5
    elif price < 5 and price != user_coins:
        return False
    
    x = price // divisor
    y = price % divisor

    if x == user_coins and y == 0:
        print(x,user_coins,y)
        return True

    elif x!= user_coins and y == 0 and divisor <= 5:
        print('3')
        return False

    elif x!= user_coins and y != 0:
        price = y
        print(price)
        print(user_coins - x)
        return possible_distance(price, user_coins - x)
    elif x != user_coins and y == 0:
        price = divisor
        print(price)
        return possible_distance(price, user_coins - (x-1))



print(possible_distance(100, 5))
