# Discount Table

# A particular retailer is having a 60 percent off sale on a variety of discontinued products. 
# The retailer would like to help its customers determine the reduced price of the merchandise 
# by having a printed discount table on the shelf that shows the original prices
# and the prices after the discount has been applied.

# Write a program that uses a loop to generate this table, 
# showing the original price, the discount amount, and the new price for purchases of
# $4.95, $9.95, $14.95, $19.95 and $24.95.
# Ensure that the discount amounts and the new prices are rounded to 2 decimal places when they are displayed.

# Documentation

# For this project solution you may use:

# - Variables, expressions, statements
# - Conditionals and recursion
# - Iteration
# - Strings

# Deadline

# This project requires to be completed in a maximum of **1 hour**


# I create a list with the prices of the items on sale.
# Then I assign 2 constants to calculate the discount and the final price.
prices = [4.95, 9.95, 14.95, 19.95, 24.95]
fix_discount = 60
fix_final = 40

# I create a function that returns the discount and the final price
def on_sale(price, sale):
    return (price*sale)/100

# I create a loop to display the discount table taking advantage of on_sale function
for price in prices:
    print("Original price: {:.2f}$    Discount: {:.2f}$    Final price: {:.2f}$".format(price,
                                                            on_sale(price, fix_discount), on_sale(price, fix_final)))
