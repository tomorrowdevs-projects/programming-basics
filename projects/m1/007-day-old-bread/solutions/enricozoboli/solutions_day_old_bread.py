REGULAR_BREAD_PRICE = 3.49

# Asking user's number of loaves.
loaves_of_bread = int(input("Insert the number of loaves: "))

# Compute the regular cost, the discount and the discounted cost. 
discounted_price = (REGULAR_BREAD_PRICE / 100) * 60
total_regular_cost = loaves_of_bread * REGULAR_BREAD_PRICE
total_discount = (total_regular_cost / 100) * 60
total_discounted_cost = total_regular_cost - total_discount

# Print each results.
print(f"\nThe regular price is €{REGULAR_BREAD_PRICE} for each loaves.\n")
print(f"With regular price your cost will be €{total_regular_cost:.2f}\n")
print(f"The discount for day old bread is €{discounted_price:.2f}.\n")
print(f"Your total discount is €{total_discount:.2f}.\n")
print(f"Your total cost is €{total_discounted_cost:.2f}.\n")