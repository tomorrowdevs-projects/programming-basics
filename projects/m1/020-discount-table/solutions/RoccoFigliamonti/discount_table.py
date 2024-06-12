"""# Discount Table

A particular retailer is having a 60 percent off sale on a variety of discontinued products.
The retailer would like to help its customers determine the reduced price of the merchandise
by having a printed discount table on the shelf that shows the original prices and
the prices after the discount has been applied.

Write a program that uses a loop to generate this table,
showing the original price, the discount amount, and the new price for purchases of
$4.95, $9.95, $14.95, $19.95 and $24.95.
Ensure that the discount amounts and the new prices are rounded to 2 decimal places when they are displayed.
"""

original_prices = [4.95, 9.95, 14.95, 19.95, 25.95]
discount_rate = 0.6
discount_on_prices = [round(i*discount_rate,2) for i in original_prices]
new_prices = [round(original_prices[i] - discount_on_prices[i],2) for i in range(len(original_prices))]

for i in range(len(original_prices)):
    print(f"original price: {original_prices[i]}; discount: {discount_on_prices[i]}; final price: {new_prices[i]} ")