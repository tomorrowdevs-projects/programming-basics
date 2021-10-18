original_price = 4.95

while original_price < 25:
    discount = original_price / 100 * 60
    discounted_price = original_price - discount
    print(f"\nOriginal price €{original_price:.2f}\nDiscount €{discount:.2f}\n"
    f"Final price €{discounted_price:.2f}")
    original_price += 5