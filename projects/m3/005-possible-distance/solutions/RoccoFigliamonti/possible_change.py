"""
Create a program that determines whether or not it is possible to construct a particular total using a specific number of coins. 
For example, it is possible to have a total of $1.00 using four coins if they are all quarters. 
However, there is no way to have a total of $1.00 using 5 coins. Yet it is possible to have $1.00 using 6 coins by using 3 quarters, 2 dimes and a nickel"""

def possible_change(amount,coins_num,coin_list = [0.01, 0.05, 0.10, 0.25]):
    #base case
    #when you haven't got any amount to count
    #if you used the exact initial number of coins_num (e.g the recursive subtraction = 0)
    #it means that you can divide the amount for that number of coins, otherwise you need more coins or less
    if amount == 0:
        if coins_num == 0:
            return True
        else:
            return False
    else:
        #see how many coins enter in the amount, starting from the biggest value
        #subtract from the original number to see how many coins remains that you can use
        #the round is because of the floating numbers 
        coins_num -= round(amount//coin_list[-1],3) 
        #new amount you have to consider for the next recursion
        amount = round(amount % coin_list[-1],3)
        #remove the biggest value of coin which you have already used
        coin_list.pop()
        return possible_change(amount, coins_num, coin_list)


print(possible_change(1.15, 6))
#print(possible_change(1.15, 7))

"""
possible_change(1.15,6)
    -->coins_num = 6 - 1.15 // 0.25 = 6 - 4 = 2
       amount = 1.15 % 0.25 = 0.15
       coin_list = [0.1, 0.5, 0.10]
       possible change (0.15, 2, [0.1,0.5,0.10])
            ---> coin_sum = 2 - 0.15 // 0.10 = 2 - 1 = 1
                 amount = 0.15 % 0.10 = 0.5
                 coin_list = [0.1, 0.5]
                 possible_change (0.5, 1, [0.1, 0.5])
                        ---> coins_sum = 1 - 0.5 // 0.5 = 1-1 = 0
                             amount = 0.5 % 0.5 = 0
                             coin list = [0.1]
                             possible_change (0,0,[0.1])
                                --> amount == 0, coins_num ==0 --> True


possible_change(1.15,7)
    -->coins_num = 7 - 115//25 = 7 - 4 = 3
       amount = 115%25 = 15
       coin_list = [1,5,10]
       possible change (15, 3, [1,5,10])
            ---> coin_sum = 3 - 15 // 10 = 3 - 1 = 2
                 amount = 15 % 10 = 5
                 coin_list = [1,5]
                 possible_change (5,2,[1,5])
                        ---> coins_sum = 2 - 5 // 5 = 2-1 = 1
                             amount = 5%5 = 0
                             coin list = [1]
                             possible_change (0,1,[1])
                                --> amount == 0, coins_num ==1 --> false



"""