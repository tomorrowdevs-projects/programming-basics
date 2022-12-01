item_ordered = float(input('Enter how much items have u ordered: '))

def shipping_change(items):
    first_item_order = 10.99
    subquest_order = 2.99
    
    total_order_cost = first_item_order + ((items - 1) * subquest_order)

    print(f'Your shipping cost consist in €{total_order_cost}')

shipping_change(item_ordered)