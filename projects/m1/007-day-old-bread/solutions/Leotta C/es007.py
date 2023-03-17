bread=int(input("Enter the number of loaves of day old bread:  "))
price1=bread*3.49
discount=60/100 * price1
price2=price1-discount

Price1=f"{price1:.2f}".rjust(10)
Discount=f"{discount:.2f}".rjust(10)
Price2=f"{price2:.2f}".rjust(10)

print(f"First price: {Price1}")
print(f"Discount:    {Discount}")
print(f"Final price: {Price2}")


