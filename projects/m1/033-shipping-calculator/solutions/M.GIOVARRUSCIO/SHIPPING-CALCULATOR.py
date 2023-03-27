"""
In online retailer provides express shipping for many of its items at a rate of €10.99
for the first item in an order, and €2.99 for each subsequent item in the same order.

Write a function that takes the number of items in the order as its only parameter.

Return the shipping charge for the order as the function’s result.

Include a main program that reads the number of items purchased from the user and
displays the shipping charge.

"""
def calcola(a):
    if a==0:
        return 0
    else:
        return 10.99+(2.99*(a-1))

num_articoli=int(input("Inserire numero articoli:"))
tot=calcola(num_articoli)
print(f"Il costo di spedizione per {num_articoli}  articoli è {tot:.2f} €")