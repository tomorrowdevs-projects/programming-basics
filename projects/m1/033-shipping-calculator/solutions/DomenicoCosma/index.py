#Function that calculate the shipping charge
#it dependes how many items do you wanna buy
#the shipping charge for 1 item is 10.99 and the other next items is 2.99



def shipping_charge(num):
    if num == 1:
        print('Your total shipping charge is €10.99')
    elif num > 1:
        print(f'Your total shipping charge is €{((num*2.99)-2.99)+10.99}')
    else:
        print('Your shipping charge is €0')

shipping_charge(int(input('How many items do you wanna buy?')))