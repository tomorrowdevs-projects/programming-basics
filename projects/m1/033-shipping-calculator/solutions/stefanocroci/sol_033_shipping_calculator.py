def shippingcost(item):
    cost = 10.99
    if item > 1:
        cost = 10.99 + (item - 1) * 2.99
    return cost

def main():
    while True:
        user_item = int(input('Insert number of items in your order: '))
        tot_cost = shippingcost(user_item)
        print('Total charge for this order is ' + '{:.2f}'.format(tot_cost) + ' €')

main()
