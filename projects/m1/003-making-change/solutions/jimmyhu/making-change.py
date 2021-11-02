pennie = 1
nickel = 5
dime = 10
quarter = 25
loonie = 100
toonie = 200
payment = float(input("totale pagato "))
payment_float = "{:.2f}".format(payment)
cent= int(payment_float[-2:])
print("the change could be: " + str(cent / pennie) + " pennies or " + str(cent / nickel) + " nickels or " + str(cent / dime) + " dimes or " + str(cent / quarter) + " quarters" )





# import sys
# def change_coins(coins, m, difference):
#     if (difference == 0):
#             return 0
#     res = sys.maxsize
#     for i in range(0, m):
#         if (coins[i] <= difference):
#             sub_res = change_coins(coins, m, difference-coins[i])
#             if (sub_res != sys.maxsize and sub_res + 1 < res):
#                 res = sub_res + 1
#     return res
# coins = [0.01, 0.05, 0.10, 0.25, 1 , 2]
# m = len(coins)
# print("minimum coins required is", change_coins(coins, m, difference))