def total_amount(d,c,i):
    #create a dict to compute the function using the next value
    value = {0:0.25, 1:0.10, 2:0.05, 3:0.01}
    #check if the coin_value (quantity of coin * value of coin) is enough to get the amount of dollars
    coin_value = value[i] * c
    if d - coin_value == 0:
        return True
    else:
        #if it's not enough, check the index value and interrupt recursion or repeat it depending on the case
        if i == 3:
            return False
        else:
            i += 1
            return total_amount(d,c,i)

def check_amount(t,c,d):
    #if it's true then it's enough. if it is false, it isn't enough
    if t:
        return str(c) + ' coins are ENOUGH to get $' + str(d)
    else:
        return str(c) + ' coins are NOT enough to get $' + str(d)

def main():
    #get input from user, set index and print return from called function
    dollars = int(input('Enter how many dollars: '))
    coins = int(input('Enter how many coins: '))
    index = 0
    print(check_amount(total_amount(dollars, coins, index), coins, dollars))    

if __name__ == '__main__':
    main()