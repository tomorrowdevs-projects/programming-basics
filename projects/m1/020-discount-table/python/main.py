
original_price = [4.95, 9.95, 14.95, 19.95, 24.95]
new_price = []
discount_percent = 0.6
discount = []

def update_price():

    for price in original_price:
        discount.append(price*discount_percent)
        new_price.append(price - price*discount_percent)


def table(price, new_price, discount):

    for i in range(len(price)):
        print(f"\nOriginal price:\t\t{price[i]:.2f}$")
        print(f"Discount amount:\t{discount[i]:.2f}$")
        print(f"New price:\t\t{new_price[i]:.2f}$\n")


update_price()
table(original_price, new_price, discount)
