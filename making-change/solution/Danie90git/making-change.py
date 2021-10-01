# import random                                                   
# rest = int((random.random()*10)* 100)
# print("The rest of the customer is " + str(rest) + " cents")
# if rest == 1:
  # print("The rest of the customer is " + str(rest) + " cent")  # alternative: it generates a random number as a rest instead using input()

rest = int(input("Insert number of cents: "))    

def coin_name(rest):
    toonies = rest // 200
    toonies_rest = rest % 200 
    if toonies > 1:
        print (str(toonies) + " toonies")
    if toonies == 1:
        print (str(toonies) + " toonie")
    loonies = toonies_rest // 100
    loonies_rest = toonies_rest % 100
    if loonies > 1:
        print (str(loonies) + " loonies")
    if loonies == 1:
        print (str(loonies) + " loonie")
    quarters = loonies_rest // 25
    quarters_rest = loonies_rest % 25
    if quarters > 1:
        print (str(quarters) + " quarters")
    if quarters == 1:
        print (str(quarters) + " quarter")
    dimes = quarters_rest // 10
    dimes_rest = quarters_rest % 10
    if dimes > 1:
        print(str(dimes) + " dimes")
    if dimes == 1:
        print(str(dimes) + " dime")
    pennies = dimes_rest // 1 
    if pennies > 1:
        print(str(pennies) + " pennies")
    if pennies == 1:
        print(str(pennies) + " penny")


print("The rest is equal to:")
coin_name(rest)