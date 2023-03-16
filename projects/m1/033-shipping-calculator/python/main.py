def calculate_shipping_cost(n_items):
    first_order_shipping = 10.99
    other_orders_shipping = 2.99
    if n_items == 1:
        return first_order_shipping
    elif n_items > 1:
        n_items = n_items - 1
        shipping = (other_orders_shipping * n_items) + first_order_shipping
        return shipping
    else:
        return 0

n_items = int(input("Enter the number of items purchased: "))
# Calculate and display the shipping charge
shipping_cost = calculate_shipping_cost(n_items)
if shipping_cost > 0:
    print(f"The shipping charge for {n_items} items is €{shipping_cost:.2f}")
else:
    print("You didn't purchase anything.")