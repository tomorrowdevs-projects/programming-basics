items_amount = int(input('Enter the amout of items: '))
def shippingfee(items):
    if items <= 0:
        return 0
    else:
        extra = (items - 1) * 2.99
        total = extra + 10.99
        return total
print(f'{shippingfee(items_amount):.2f}')