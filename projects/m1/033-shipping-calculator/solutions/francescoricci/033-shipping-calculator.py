# exercise 033 shipping calculator by francesco Ricci

def shippingcost(qty):
    """
    10.99 is shipping cost from fist product
    2.99 is shipping cost after the first
    """
    return "{:.2f}".format(10.99 + (qty - 1) * 2.99) if qty > 1 else 0

print(f'Total Price fo this order is €: {shippingcost(100)}')
