#Your program should read both the dollar amount and the number of coins from the user.
#display a message indicating whether or not the entered dollar amount can be formed using the number of coins indicated.

#divided the dollar's input with all value from dictionary(use recursions), if %=0 add the result in a list
#compare the each element in list with the coins's input, if they are the same, return the result

#create a list with possible coins
money=[0.25, 0.10, 0.05, 0.01]
real_coins=[0]

def how_many_coins(dollars, coins, x=0, y=1):
    #possible_coins=find_coins(dollars, coins)
    if x<=len(money)-1:
    #if the coin multiplicate per numbers of coins insert by the user is the dollrs's input, return true
        if coins*money[x]==dollars: 
            real_coins.append(coins)
            return sum(real_coins)
        #with counter y identify if the user don't want the minimum coins
        if coins>y:
            if dollars/(coins-y)>money[x] and ((coins-y)*(money[x]))<dollars and (coins-y)*money[x]!=dollars:
                real_coins.append(coins-y)
                #new dollars amount without coins used
                dollars=round(dollars-(money[x]*(coins-y)), 2)
                #new coins amount without coins used
                coins=coins-(coins-y)
                x+=1
            else: y+=1
        else: 
            if dollars>=money[x]:
                #append to a list the amount of pieces of single coin
                real_coins.append(dollars//money[x])
                #new dollars amount without coins used
                dollars=round(dollars-(money[x]*(dollars//money[x])), 2)
            x+=1
        #recursion
        how_many_coins(dollars, coins, x, y)
    return sum(real_coins)

#printing function
def main():
    dollars=float(input("Insert how many dollars you want to change: "))
    coins=int(input("Insert how many coins you want back: "))
    if how_many_coins(dollars, coins)==coins:
        print(f"Is possible to have a total of {dollars}$ using {coins} coins")
    else: print(f"Is impossible to have a total of {dollars}$ using {coins} coins")
    
main()